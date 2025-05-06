import express from "express"
import postRoute from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoute from "./routes/users.js";



const app  =express()

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)


app.listen(8000,()=>{
    console.log("connected")
})