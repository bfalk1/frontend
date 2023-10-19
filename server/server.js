
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

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://julianbrickman:Jemba123@cluster0.j21pkaw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Master',
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});


// Create a User model
const collectionName = 'Users'; // Replace with your collection name
//const User = mongoose.model(collectionName, new mongoose.Schema({}), collectionName);

/*
mongoose.connection.collection(collectionName).insertOne(dataToSave, (error, result) => {
  if (error) {
    console.error('Error logging user:', error);
  } else {
    console.log('User logged:', dataToSave);
  }
});
*/

  /*User.find()
  .then((users) => {
    console.log('All users:', users);
  })
  .catch((error) => {
    console.error('Error retrieving users:', error);
  });
  */


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
      "Users":["julianbrickman"],
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
  console.log(req.body);
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
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({"Password": result.Password, "Name": result.Name});
    } else {
      console.log('User not found');
    }
  });
})

app.get("/api/home", (req,res) => {
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({"events": result.events});
    } else {
      console.log('User not found');
    }
  });
})

app.get("/api/eventPage", (req,res) => {
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({events});
    } else {
      console.log('User not found');
    }
  });
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

  mongoose.connection.collection("Events").findOneAndUpdate(
    { id: eventId.id },
    { $push: { "enrolledUsers": userId } },
    (error, result) => {
      if (error) {
        console.error('Error adding user to event:', error);
        res.status(500).json({ message: 'Error adding user to event' });
      } else if (result.value) {
        console.log('User added to event:', userId);
        res.json({ message: 'User added to event successfully' });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    }
  );
});

app.post('/user/addEvent/:userId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.body.eventId;

  mongoose.connection.collection("Users").findOneAndUpdate(
    { "email": userId },
    { $push: { "events": eventId } },
    (error, result) => {
      if (error) {
        console.error('Error adding user to event:', error);
        res.status(500).json({ message: 'Error adding user to event' });
      } else if (result.value) {
        console.log('Event added to User:', userId);
        res.json({ message: 'User added to event successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  );
});

app.post('/user/addSubmission/:userId', (req, res) => {
  //const userId = req.params.userId;
  //const eventId = req.body[1].eventId
  //const submissionData = req.body[2].submission; 
  console.log(req.body);
  /*
  // Find the user with the given email
  mongoose.connection.collection("Users").findOne({ "email": userId }, (error, user) => {
    if (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Error finding user' });
    } else if (user) {
      for (let i=0;i<user.events.length-1;i++) {
        if (eventId === String(user.events[i].id)) {
          user.events[i].submissions.push(submissionData);
        }
      }
        mongoose.connection.collection("Users").updateOne(
          { "email": userId },
          { $set: { "events": user.events } },
          (updateError) => {
            if (updateError) {
              console.error('Error adding submission to event:', updateError);
              res.status(500).json({ message: 'Error adding submission to event' });
            } else {
              console.log('Submission added to event:', eventId);
              res.json({ message: 'Submission added to event successfully' });
            }
          }
        );
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  */
});


app.get("/api/events", async (req,res) => {
  try {
    const eventArray = await mongoose.connection.collection("Events").find({}).toArray();
    
    if (eventArray.length > 0) {
      console.log('Events retrieved:');
      res.json(eventArray);
    } else {
      console.log('No events found.');
      res.status(404).json({ message: 'No events found' });
    }
  } catch (error) {
    console.error('Error querying events:', error);
    res.status(500).json({ message: 'Error querying events' });
  }
})

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  mongoose.connection.collection(collectionName).findOne({"email": req.body.email }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({ message: "Account exists under this email"});
    } else {
      mongoose.connection.collection(collectionName).insertOne(newUser, (error, result) => {
        if (error) {
          console.error('Error logging user:', error);
        } else {
          console.log('User logged:', newUser);
        }
      });
      res.json({ message: "User added successfully"});
    }
  });
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