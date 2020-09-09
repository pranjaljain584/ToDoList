const mongoose = require('mongoose') ;

// created new schema
const taskSchema = new mongoose.Schema({

    taskName : {
        type: String ,
        required : true
    },

    taskDate : {
        type: Date ,
        required: true
    }, 

    category : {
        type: String 
    },

    // priorty : {
    //     type: String 
    // },

    // description : {
    //     type: String
    // }

}) ;

const Tasks = mongoose.model('Tasks' , taskSchema) ;

module.exports = Tasks ;