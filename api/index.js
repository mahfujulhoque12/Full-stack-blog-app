import express from "express"
import postRoute from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser"



const app  =express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)


app.listen(8000,()=>{
    console.log("connected")
})