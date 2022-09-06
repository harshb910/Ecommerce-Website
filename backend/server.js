const app = require('./app');
const dotenv  = require('dotenv');



const cloudinary = require('cloudinary');
const connectDatabase = require('./config/database');

//Handling Uncaught exceptions
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
})
dotenv.config({path:'./config/config.env'});
//Config

// require("dotenv").config({ path: "backend/config/config.env" });
// console.log("Hello")
// console.log(process.env.PORT);
// console.log(process.env.DB_URI);

//connection to Database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, ()=>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`)

})

console.log(process.env.PORT);
console.log(process.env.DB_URI);

app.get('/', (req, res) => {
    res.send("App is running")
});

//Unhandled Promise Rejection
process.on("unhandledRejection", err =>{
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(()=>{
        process.exit(1);
    });
})