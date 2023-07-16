import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import multer from 'multer';


import postRoutes from './routes/post.js';
import authRoutes from './routes/auth.js'

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 1000,
};

const app = express()

app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});


app.use('/api/posts', postRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log('Connected')
})
