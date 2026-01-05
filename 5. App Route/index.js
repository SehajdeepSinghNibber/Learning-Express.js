import express from 'express'

const app = express()
const PORT = 8000

//UGLY CODE

// app.get(`/student`,(req,res)=>{
//     res.send('All Students')
// })

// app.post(`/student`,(req,res)=>{
//     res.send('Add new Student')
// })

// app.put(`/student`,(req,res)=>{
//     res.send('Update Student')
// })

// app.delete(`/student`,(req,res)=>{
//     res.send('Delete Student')
// })

//REFACTOR
//app.route()

app.route('/student').get((req,res)=>{
   res.send('All Students')
})
 .post((req,res)=>{
   res.send('All Student')
 })
 .put((req,res)=>{
   res.send('Update Student')
 })
 .delete((req,res)=>{
   res.send('Delete Student')
 })

app.listen(PORT,()=>console.log(`Server is listening at ${PORT}`))