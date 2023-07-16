import { db } from "../db.js";

import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const query = req.query.category
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);
    console.log(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const query =
    "SELECT `username`, `title`, `description`, p.img, u.img AS userImg, `category`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })

};

export const addPost = (req, res) => {
  res.json();
};
export const deletePost = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json("Не авторизован")

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json('Не валидный токен')

    const postId = req.params.id 
    const query = "DELETE FROM posts WHERE `id` = ? AND `uid` = ? "

    db.query(query, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("Вы можете удалить только свой пост")

      return res.json("Пост был удален")
    });
  })
};
export const updatePost = (req, res) => {
  res.json();
};
