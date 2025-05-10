import mongoose from "mongoose"

export default async function mongoseDB_Connection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log( process.env.MONGODB_URI,"\n Mongodb Atlasga ulandi ");
        return true;
    } catch (error) {
        console.log(process.env.MONGODB_URI,"\n \nUlanishda Xatolik !\n",error.message);
        return false;        
    }
}