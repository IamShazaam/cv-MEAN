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
const uri = 'mongodb://127.0.0.1:27017/CV';

//MongoDB connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 });
console.log('Attempting to connect to MongoDB...');

// GET endpoint for fetching
app.get('/api/cv', async (req, res) => {
  console.log('Received request for /api/cv');
  try {
    const result = {};
    const collections = ['users', 'intro'];

    // Fetching data
    for (const collectionName of collections) {
      console.log(`Fetching data from collection: ${collectionName}`);
      const collection = client.db('CV').collection(collectionName);
      const data = await collection.findOne({ _id: '640fe563bc6ac64b1cb2a91f' });
      result[collectionName] = data;
      console.log(`Fetched data from collection: ${collectionName}`, data);
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
