import express from 'express'

const app =express()

//double callback

app.get("/double-cb",(req,res,next)=>{//next is used for double callback
    console.log("This is a single callback")
    next()
},
(req,res)=>{
    res.send("This is a double callback")
})

app.listen(8000,()=>console.log("Server is Up!!"))