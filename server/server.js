
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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

let userlist = [
  {
    "Name": "Ben Falkner"
  },
  {
    "Name": "Julian Brickman"
  },
  {
    "Name": "Alice Smith"
  },
  {
    "Name": "John Doe"
  },
  {
    "Name": "Emily Johnson"
  },
  {
    "Name": "Michael Brown"
  },
  {
    "Name": "Sarah Davis"
  },
  {
    "Name": "Daniel Wilson"
  },
  {
    "Name": "Olivia Anderson"
  },
  {
    "Name": "Matthew Taylor"
  }

];

let Currentuser = [
  {
    "Name": "Julian Brickman",
    "FirstName": "Julian",
    "LastName": "Brickman",
    "email": "julianBrickman@gmail.com",
    "school": "Queen's",
    "gpa": "3.9",
    "year": "2025",
    "Password": "abba1212",
    "aboutMe": "I'm a third year computer science student who is very passionate about computer and I want a job"
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

app.post("/api/findUser", (req, res) => {
  const userData = req.body; // This will contain the userData parameter sent from the frontend
  // Assuming you want to find a user based on some criteria (e.g., FirstName)
  const foundUser = Currentuser.find((user) => user.Name === userData.Name);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.get("/api/currentUser", (req,res) => {
  res.json({Currentuser})
})

app.get("/api/fullUserList", (req,res) => {
  res.json({userlist})
})

app.listen(5001, () => {console.log("server Started at port 5001")});