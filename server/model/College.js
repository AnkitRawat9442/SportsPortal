const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
    },
    sportsName:{
        type : String , 
        required : true,
    },
    startTime: {
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    bookedBy : {
        type : String ,
        required : true
    }
   
    
});

module.exports = mongoose.model("College", collegeSchema);
