import express from 'express'

const app = express()

//Regex
//users/some 4 digit number
app.get('/products/iphone',(req,res)=>{
    res.send("Here is Your Iphone!")
})

app.listen(8000,()=>console.log('Server is ready!!'))