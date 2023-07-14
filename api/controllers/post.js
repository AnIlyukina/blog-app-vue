import { db } from "../db.js";

export const getPosts = (req, res) => {
  const query = req.query.category
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

    db.query(query, [req.query.category], (err, data) => {
      if (err) return res.send(err)
      console.log(err)

      return res.status(200).json(data)
    });
}

export const getPost = (req, res) => {
  res.json();
};

export const addPost = (req, res) => {
  res.json();
};
export const deletePost = (req, res) => {
  res.json();
};
export const updatePost = (req, res) => {
  res.json();
};