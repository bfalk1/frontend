
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:8000' }));

app.use(express.json());

let users = [
  {
    "FirstName": "Ben",
    "email": "benFalkner@gmail.com",
    "Password": "ImGay123"
  },
  {
    "FirstName": "Julian",
    "email": "julianBrickman@gmail.com",
    "Password": "abba1212"
  }
];


app.get("/api", (req,res) => {
  res.json({users})
})

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "User added successfully", newUser });
});

app.listen(5001, () => {console.log("server Started at port 5001")});