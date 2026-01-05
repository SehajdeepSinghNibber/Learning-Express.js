

// Routes
app.get('/users', (req, res) => {
    return res.json(users)
})

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))