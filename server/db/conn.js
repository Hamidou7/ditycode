const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("db connect succes")).catch(err=>{console.log(err.message);})