import mongoose from "mongoose";

// const url  = "mongodb+srv://vikasaurasoft:foodapplication@cluster0.kixdbb4.mongodb.net/foodapp"

mongoose.connect('mongodb+srv://vikasaurasoft:foodapplication@cluster0.kixdbb4.mongodb.net/Crud', {
    family: 4
})

mongoose.connection.on('connected', () => {
    console.log('connected successfully');
})

mongoose.connection.on('error', (error) => {
    console.log(error);
})