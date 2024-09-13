import mongoose from 'mongoose';

async function createConnection() {
    mongoose.connect('mongodb+srv://lopeseduarrda23:admin123@cluster0.jl86o.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0');

    return mongoose.connection;
}; 

export default createConnection;