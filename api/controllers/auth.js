import { db } from "../db.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // check existing user

  const query = "SELECT * FROM users WHERE email = ? or name =?";

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json("Такой пользователь существует!");

    //hash password and create user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`name`, `email`, `password`) VALUES (?)";

    const values = [req.body.name, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("user создан");
    });
  });
};

export const login = (req, res) => {
  // check user

  const query = "SELECT * FROM users WHERE name = ?";

  db.query(query, [req.body.name], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    if (data.length === 0) {
      return res.status(404).json("Пользователь не найден!");
    }
    // check password

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Не правильный логин или пароль!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    console.log(token, "token");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Logout");
};
