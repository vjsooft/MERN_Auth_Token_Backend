// require('dotenv').config();
require("dotenv").config({
  path: __dirname + "/.env",
});
// console.log("MONGO_URI =>", process.env.MONGO_URI);
const app = require('./src/app');
const db = require('./src/config/db');
const PORT = process.env.PORT || 8080
console.log("MONGO_URI =>", process.env.MONGO_URI);
db();
    
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
