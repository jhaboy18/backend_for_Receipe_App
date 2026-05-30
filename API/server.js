// server.js
import express from "express";
import mongoose from "mongoose";
import userrouter from './Routes/User.js'
import receiperrouter from './Routes/Receipe.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}
  
))

//
app.use('/api', userrouter);
//receipe router
app.use('/api',receiperrouter)

//
mongoose.connect(process.env.MONGO_URL
  ,
  { dbName: "Mern" }
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB error:", err));

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
