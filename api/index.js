import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import postRoutes from './routes/post.js';
import authRoutes from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(cors('*'));
app.use(cookieParser());


app.use('/api/posts', postRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log('Connected')
})
