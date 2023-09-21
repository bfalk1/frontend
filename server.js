//const { MongoClient } = require('mongodb');

/*
class DBAPI {
    static get properties() {
        return {
    };
    }

    constructor() {
        this.uri = "mongodb+srv://julianbrickman:Jemba123@cluster0.j21pkaw.mongodb.net/?retryWrites=true&w=majority";
        this.addEventListener('UserAttributesUpdateEvent', this.handleUserUpdates);
    }

    async main() {
        
        const client = new MongoClient(uri);
      
        // Connect the client to the server (optional starting in v4.7)
        try {
            await client.connect();
            //await listDatabases(client);
            await updateUserByName(client, "benjamin",
                {name:"benjamin Falkner"});
    
              
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    handleUserUpdates(e) {
        console.log("here");
    }

    async handleUserUpdates2(e) {
        console.log("here");
        const client = new MongoClient(this.uri);
        const update = e.detail.value;
        try {
            // Connect to the "Master" database
            const db = client.db("Master");
        
            // Access the specified collection
            const collection = db.collection("Users");
        
            // Insert the new document into the collection
            const result = await collection.insertOne(update);
        
            // Check if the insertion was successful
            if (result.insertedCount === 1) {
              console.log("Document inserted successfully.");
              console.log("Inserted document ID: " + result.insertedId);
            } else {
              console.log("Document insertion failed.");
            }
          } catch (error) {
            console.error("Error inserting document:", error);
          }
     }

}


async function listDatabases(client) {
    const databases = await client.db().admin().listDatabases();
    
    databases.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

async function createUser(client, newUser) {
    //Takes one user
   const result = await client.db("Master").collection("Users").insertOne(newUser);

   console.log(result.insertedId);
}

async function createMultipleUsers(client, newUsers) {
    // Takes array
    const result = await client.db("Master").collection("Users").insertMany(newUsers);
 
    console.log(result.insertedCount);
 }

 async function findUserByName(client, nameOfUser) {
    //Expects json object in FindOne
    const result = await client.db("Master").collection("Users").findOne({name:nameOfUser});

    if (result) {
        console.log("Found listing");
    } else {
        console.log(" did not found lisiting");
    }
 
 }

 async function updateUserByName(client,userName,update) {
    const result = await client.db("Master").collection("Users").updateOne({name:userName},
        { $set: update});

    if (result) {
        console.log("Updated Result");
    } else {
        console.log(" did not find User");
    }
 }

 async function usertUserByName(client,userName,update) {
    const result = await client.db("Master").collection("Users").updateOne({name:userName},
        { $set: update}, {upsert: true});

    console.log(result.matchedCount);

    if (result.upsertedCount>0){
        console.log(result.upsertedId);
    }
 }
 */


 const { MongoClient } = require('mongodb');
 const express = require('express');
 const cors = require('cors');
 
 const app = express();
 const port = 3000; // or any port of your choice

 
 
 // Connect to MongoDB Atlas
 const uri = 'mongodb+srv://julianbrickman:Jemba123@cluster0.j21pkaw.mongodb.net/?retryWrites=true&w=majority';
 const client = new MongoClient(uri);

 app.use(cors());

  
 
 client.connect()
   .then(() => {
     console.log('Connected to MongoDB Atlas');
   })
   .catch(err => {
     console.error('Error connecting to MongoDB Atlas', err);
   });
 
 // Define your API endpoints here to interact with MongoDB
 app.post('/api/users', async (req, res) => {
    try {
      const database = client.db('Master'); // Assuming 'Master' is your database name
      const collection = database.collection('Users'); // Assuming 'Users' is your collection name
  
      // Get the user data from the request body
      const newUser = req.body; // Assuming you're sending user data in the request body
  
      // Insert the new user document into the collection
      const result = await collection.insertOne(newUser);
  
      if (result.insertedCount === 1) {
        // User was successfully added
        res.status(201).json({ success: true, message: 'User added successfully' });
      } else {
        // Insertion failed for some reason
        res.status(500).json({ success: false, message: 'Failed to add user' });
      }
    } catch (error) {
      // Handle any errors that occur during the database operation
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'An internal server error occurred' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
 