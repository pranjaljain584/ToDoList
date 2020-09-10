// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

module.exports.home = function(req,res){

    TasksList.find({} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks
        }) ;

    });

};

module.exports.addTask = function(req,res){

    TasksList.create({
        
        taskName : req.body.taskName ,
        taskDate : req.body.taskDate ,
        category : req.body.category ,
        description : req.body.description ,
        priority : req.body.priority

    }, function(err, newTask){

        if(err){
            console.log('err in creating task') ;
            return ;
        }
        console.log('******' , newTask) ;
        return res.redirect('back') ;

    });
};

// module.exports.today=function(req,res){
    
// };

// module.exports.nextSevenDays=function(req,res){
    
// };