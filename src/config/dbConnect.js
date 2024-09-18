import mongoose from 'mongoose';

async function createConnection() {
    mongoose.connect(process.env.MONGO_DB_URL);

    return mongoose.connection;
}; 

export default createConnection;