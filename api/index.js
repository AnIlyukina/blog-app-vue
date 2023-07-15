import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import postRoutes from './routes/post.js';
import authRoutes from './routes/auth.js'

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 1000,
};

const app = express()

app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser());


app.use('/api/posts', postRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log('Connected')
})
