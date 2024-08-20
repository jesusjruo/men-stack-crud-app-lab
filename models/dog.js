///////////////////////////////////////////////
//////// Dog model                   ///////// 
///////////////////////////////////////////////

//import the mongoose VARIABLE which holds the configuration on the file called connection.js
const mongoose = require('./connection');

//created our SCHEMA. 
const DogSchema = new mongoose.Schema({
    breed: String,
    description: String,
    imageUrl: String,
});

//this variable holds all the configurations and schema and is the thing that 'talks' to the db and express app
const Dog = mongoose.model('lab-dog', DogSchema);

// export this Dog for it to be used 
module.exports = Dog;