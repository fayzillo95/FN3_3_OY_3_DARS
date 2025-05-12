import mongoose from "mongoose"
// const uri = "mongodb+srv://Fayzillo:d8eMyRNDYS5H8Qgl@fayzillo.20eqq0h.mongodb.net/test?retryWrites=true&w=majority&appName=Fayzillo";

export default async function mongoseDB_Connection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log( process.env.MONGODB_URI,"\n Mongodb Atlasga ulandi ");
        return true;
    } catch (error) {
        console.log(process.env.MONGODB_URI,"\n \nUlanishda Xatolik !\n",error.message);
        return false;        
    }
}


// import { MongoClient, ServerApiVersion } from 'mongodb';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     console.log("Function end ")
//     await client.close();
//   }
// }
// run().catch(console.dir);
