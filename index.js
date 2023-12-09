const express=require("express")
const app=express()

app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})

app.get("/",(request,response)=>{
    response.send("App is Running")
})

app.get("/login",(req,res)=>{
    res.send("Login Succes")
})