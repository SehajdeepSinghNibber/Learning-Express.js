import express from 'express'

const app = express()

//Regex

app.get(/x/,(req,res)=>{
    res.send("If the path  includws the letter (x) only then this code will run")
})

app.listen(8000,()=>console.log('Server is ready!!'))