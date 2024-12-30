const express = require ('express');
const app = express();
const dotenv= require("dotenv").config()

const cors = require("cors")

const PORT = process.env.PORT || 8080;



app.listen(PORT , (err)=>{
    console.log(`app is running on ${PORT}`);
})