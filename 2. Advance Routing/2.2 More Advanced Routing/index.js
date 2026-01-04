import express from 'express'

const app = express()

//Regex
//users/some 4 digit number
app.get(/^\/users\/[0-9]{4}$/,(req,res)=>{
    res.send("It Works!")
})

app.listen(8000,()=>console.log('Server is ready!!'))