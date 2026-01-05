const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// HTML route
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// REST API - all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// REST API - single user (GET, PUT, DELETE)
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  })
  .put((req, res) => {
    // TODO: Update user
    return res.json({ status: "update pending" });
  })
  .delete((req, res) => {
    // TODO: Delete user
    return res.json({ status: "delete pending" });
  });

// PATCH (partial update)
app.patch("/api/users/:id", (req, res) => {
  // TODO: Edit user with ID
  return res.json({ status: "patch pending" });
});

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find(user => user.id === id);
//   res.json(user);
// });

// app.post("/api/users",(req,res)=>{
//     //TODO: CREATE NEW USER
//     return res.json({status:"pending"})
// })

// app.patch("/api/users/:id",(req,res)=>{
//     //TODO: Edit User with ID
//     return res.json({status:"pending"})
// })

// app.delete("/api/users/:id",(req,res)=>{
//     //TODO: Delete User with ID
//     return res.json({status:"pending"})
// })

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
