import mongoose from "mongoose";

// mongodb atlas  = "mongodb+srv://vikasaurasoft:foodapplication@cluster0.kixdbb4.mongodb.net/Crud"
//mongodb local = "mongodb://localhost:27017"

mongoose.connect('mongodb+srv://vikasaurasoft:foodapplication@cluster0.kixdbb4.mongodb.net/Crud', { 
    family: 4
})

mongoose.connection.on('connected', () => {
    console.log('connected successfully');
})

mongoose.connection.on('error', (error) => {
    console.log(error);
})