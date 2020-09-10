const mongoose = require('mongoose') ;

// created new schema
const taskSchema = new mongoose.Schema({

    taskName : {
        type: String ,
        required : true
    },

    taskDate : {
        type: String ,
        required: true
    }, 

    category : {
        type: String 
    },

    priority : {
        type: String 
    },

    description : {
        type: String
    }

}) ;

const Tasks = mongoose.model('Tasks' , taskSchema) ;

module.exports = Tasks ;