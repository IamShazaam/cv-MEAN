//Packages required for backEnd
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

//Initializing express app
const app = express();

//CORS and bodyparser
app.use(cors());
app.use(bodyParser.json());

//Initializing MongoDB
const uri = 'mongodb+srv://aws:aws@cvmean.bc7hasf.mongodb.net/?retryWrites=true&w=majority';

//MongoDB connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 });
console.log('Attempting to connect to MongoDB...');

app.get('/api/cv', async (req, res) => {

  console.log('Received request for /api/cv');
  try {
    const result = {};
    const collections = ['users'];

    // Fetching data
    for (const collectionName of collections) {
      console.log(`Fetching data from collection: ${collectionName}`);
      const collection = client.db('cvMean').collection(collectionName);
      const data = await collection.findOne({ _id: '640fe563bc6ac64b1cb2a91f' });
      result[collectionName] = data;
      console.log(`Fetched data from collection: ${collectionName}`, data);
    }

    // Fetch intro based on introId from user data
    if (result.users && result.users.introId) {
      console.log('Fetching intro data');
      const introCollection = client.db('cvMean').collection('intro');
      const introData = await introCollection.findOne({ _id: result.users.introId });
      result.intro = introData;
      console.log('Fetched intro data', introData);
    }

    // Fetch expertise based on expertiseId from user data
    if (result.users && result.users.expertiseId) {
      console.log('Fetching expertise data');
      const expertiseCollection = client.db('cvMean').collection('expertise');
      const expertiseData = await expertiseCollection.findOne({ _id: result.users.expertiseId });
      result.expertise = expertiseData;
      console.log('Fetched expertise data', expertiseData);
    }

    // Fetch skills based on skillsId from user data
    if (result.users && result.users.skillsId) {
      console.log('Fetching skills data');
      const skillsCollection = client.db('cvMean').collection('skills');
      const skillsData = await skillsCollection.findOne({ _id: result.users.skillsId });
      result.skills = skillsData;
      console.log('Fetched skills data', skillsData);
    }

    // Fetch experience based on experienceId from user data
    if (result.users && result.users.experienceId) {
      console.log('Fetching experience data');
      const experienceCollection = client.db('cvMean').collection('experience');
      const experienceData = await experienceCollection.findOne({ _id: result.users.experienceId });
      result.experience = experienceData;
      console.log('Fetched experience data', experienceData);
    }

    // Fetch education based on educationId from user data
    if (result.users && result.users.educationId) {
      console.log('Fetching education data');
      const educationCollection = client.db('cvMean').collection('education');
      const educationData = await educationCollection.findOne({ _id: result.users.educationId });
      result.education = educationData;
      console.log('Fetched education data', educationData);
    }


    // Fetching data as JSON
    console.log('Sending fetched data as JSON response');
    res.json(result);
  } catch (err) {
    console.log('Error fetching data from MongoDB:', err);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
  client.connect((err) => {
    if (err) {
      console.log('Error connecting to MongoDB:', err);
      return;
    }
    console.log('Connected to MongoDB successfully.');
  });
});
