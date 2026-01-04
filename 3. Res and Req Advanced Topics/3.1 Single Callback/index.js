import express from 'express'

const app =express()

//single callback

app.get("/single-cb",(req,res)=>{
    res.send("This is a single callback")
})

app.listen(8000,()=>console.log("Server is Up!!"))