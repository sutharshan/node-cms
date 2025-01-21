//const mongoose = require('mongoose');
import mongoose from "mongoose";

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Options for the connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Optional: Define a schema and model to test the connection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// Optional: Test creating a document
//const testUser = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });

let getUser = await User.findOne();

console.log(getUser);
/*
testUser.save()
  .then((doc) => {
    console.log('User saved:', doc);
  })
  .catch((error) => {
    console.error('Error saving user:', error.message);
  });
*/