const mongoose = require("mongoose")
mongoose.connect(process.env.dbURL)
    .then(() =>{
        console.log("DataBase Connected Successfully :)")
    })
    .catch((err) =>{
        console.log("ERROR : " , err)
    })