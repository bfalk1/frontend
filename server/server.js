
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require('multer'); 
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:8000' }));

app.use(express.urlencoded({ extended: true }));


app.use(express.json());

eventData = [
  {
    "id": 1,
    "title": "Web Dev",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Google",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },
  {
    "id": 2,
    "title": "Junior Developer",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Apple",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },
  {
    "id": 3,
    "title": "Graphic Designer",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Microsoft",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },
  {
    "id": 4,
    "title": "Web Dev",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Google",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },
  {
    "id": 5,
    "title": "Junior Developer",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Apple",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },
  {
    "id": 6,
    "title": "Graphic Designer",
    "eventTitle" : "Google Web Developer challenge",
    "eventStartDate":"2023/04/21",
    "eventEndDate" :"2024/06/29",
    "eventDescription": "Good jobe finder code lots",
    "EndDate": "2023-10-15",
    "StartDate": "2023-10-15",
    "companyName": "Microsoft",
    "shortdescription": "A conference on the latest technology trends and innovations.",
    "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
  },

];

let userlist = [
  {
    "Name": "ben falkner"
  },
  {
    "Name": "julian brickman"
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

let companyInformation = [
  {
    "CompanyName": "google",
    "registeredemail": "julian@google.com",
    "registered-employees": [{"Name":"Dan Smith","email":"dansmith@gmail.com"},{"Name":"Allison Smith","email":"Allisonsmith@gmail.com"}],
    "Password": "abba1212",
    "aboutMe": "I'm a third year computer science student who is very passionate about computer and I want a job",
    "events": [{
      "id": 1,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lot,Good jobe finder code lots,Good jobe finder code lots",
      "submitted": false,
      "submittedFileName":"",
      "title": "Web Dev",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Google",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    },
    {
      "id": 2,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots",
      "submitted": false,
      "submittedFileName":"",
      "title": "Junior Developer",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Apple",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    }]
  }
];

let Currentuser = [
  {
    "Name": "julian brickman",
    "FirstName": "Julian",
    "LastName": "Brickman",
    "email": "julianBrickman@gmail.com",
    "school": "Queen's",
    "gpa": "3.9",
    "year": "2025",
    "Password": "abba1212",
    "aboutMe": "I'm a third year computer science student who is very passionate about computer and I want a job",
    "events": [{
      "id": 1,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots",
      "submitted": false,
      "submittedFileName":"",
      "title": "Web Dev",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Google",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    },
    {
      "id": 2,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lots,Good jobe finder code lot,Good jobe finder code lots,Good jobe finder code lots",
      "submitted": false,
      "submittedFileName":"",
      "title": "Junior Developer",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Apple",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    },
    {
      "id": 6,
      "submitted": true,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots",
      "submittedFileName":"User-Task-Assignment.json",
      "title": "Graphic Designer",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Microsoft",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    }]
  },
  {
    "Name": "ben falkner",
    "FirstName": "Ben",
    "LastName": "Falkner",
    "email": "Bflakner@gmail.com",
    "school": "Queen's",
    "gpa": "3.9",
    "year": "2025",
    "Password": "abba1212",
    "aboutMe": "I'm a third year computer science student who is very passionate about computer and I want a job",
    "events": [{
      "id": 5,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots",
      "submitted": false,
      "title": "Junior Developer",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Apple",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    },
    {
      "id": 6,
      "eventTitle" : "Google Web Developer challenge",
      "eventStartDate":"2023/04/21",
      "eventEndDate" :"2024/06/29",
      "eventDescription": "Good jobe finder code lots",
      "submitted": false,
      "submittedFileName":"",
      "title": "Graphic Designer",
      "EndDate": "2023-10-15",
      "StartDate": "2023-10-15",
      "companyName": "Microsoft",
      "shortdescription": "A conference on the latest technology trends and innovations.",
      "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
    }]
  }
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Access the userId from the request body
    const userId = req.body.userId+req.body.eventId;
    // Use userId to define the destination folder
    const uploadDir = `uploads/${userId}`;
    
    // Check if the directory exists, create it if not
    fs.mkdir(uploadDir, { recursive: true }, (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, uploadDir);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('fileToUpload'), (req, res) => {
  const userId = req.body.userId;
  // File has been uploaded, and req.file contains information about the uploaded file
  // You can save the file, process it, or save details in a database from here

  res.status(200).send('File uploaded successfully!');
});

app.get('/api/files/:userId/:filename', (req, res) => {
  const userId = req.params.userId; // Get the user ID from the URL parameters
  const filename = req.params.filename;
  console.log(userId);
  console.log(filename);
  const filePath = path.join(__dirname, 'uploads/',userId+"/" ,  filename);
  res.sendFile(filePath);
});

app.get("/api", (req,res) => {
  res.json({Currentuser});
})

app.get("/api/enterprise", (req,res) => {
  res.json({companyInformation});
})

app.post("/api/findUserEnterprise", (req, res) => {
  const userData = req.body; // This will contain the userData parameter sent from the frontend
  // Assuming you want to find a user based on some criteria (e.g., FirstName)
  const foundUser = companyInformation.find((user) => user.CompanyName === userData.CompanyName);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post('/addEvent/:userId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.body.eventId;

  // Find the user by ID
  const user = Currentuser.find(user => user.Name === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Add the new event ID to the user's events array
  user.events.push(eventId);
  console.log(user.events);

  res.json({ message: 'Event added successfully', user });
});

app.get("/api/events", (req,res) => {
  res.json({eventData});
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