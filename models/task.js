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

    category : String ,

    priorty : String ,

    description : String

}) ;

const Tasks = mongoose.model('Tasks' , taskSchema) ;

module.exports = Tasks ;