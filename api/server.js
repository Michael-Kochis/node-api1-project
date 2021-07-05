// BUILD YOUR SERVER HERE
// imports
const express = require('express');

// express app
const server = express();

// global middleware

//endpoints
// get helloWorld
server.get("/", (req, res) => {
    res.status(200).json({message: "Yip, Yip, Appa!"});
})

//get all users

//get user by id

//post new user

//put update user by id

//delete delete user by id

module.exports = server; // EXPORT YOUR SERVER instead of {}
