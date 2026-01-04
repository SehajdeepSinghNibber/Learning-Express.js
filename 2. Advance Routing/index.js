import express from 'express'

const app = express()

//HTTP METHOD
//GET->RETRIVE DATA
//POST->CREATE/INSERT DATA
//PUT->COMPLETELY UPDATE DATA
//PATCH->PARTIALLY UPDATE DATA
//DELETE->DELETE DATA
//ALL->ANY HTTP REQUEST METHOD

//String Pattern Path

app.get(/^\/ab?cd$/, (req, res) => {
    res.send("If the user hit (acd) or (abcd) then this will run")
})

app.listen(8000,()=> console.log("Server is Up!!"))