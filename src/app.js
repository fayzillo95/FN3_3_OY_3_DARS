import express from "express";
import "dotenv/config";
import routes from "./routers/routes.js";
import errorMidllwares from "./midllwares/errorMidllwares.js";
import mongoseDB_Connection from "./config/Databse_MongoDb_.js";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const initApp = async () =>{
    const statusDatabase = await mongoseDB_Connection()
    if(statusDatabase) {

        routes.forEach(({url, funk}) => app.use (url, funk) );
        app.use(errorMidllwares)
        app.listen(PORT, console.log(`server running --->>>>>  http://${process.env.HOST}:${PORT}`))
    
    }else{
        console.log("Databasa ulanmagan database xatoligi ",process.env.MONGODB_URI)
    }
}

initApp()