import express from 'express'

const app = express()

const cb1 = (req, res, next) => {
    console.log("Callback 1")
    next()
}

const cb2 = (req, res, next) => {
    console.log("Callback 2")
    next()
}

const cb3 = (req, res) => {
    res.send("This is array of callbacks")
}

// array of callbacks
app.get("/array-cb", [cb1, cb2, cb3])

app.listen(8000, () => console.log("Server is Up!!"))