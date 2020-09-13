// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

module.exports.imp=function(req,res){

    TasksList.find({priority : "imp"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        // console.log(tasks) ;

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Important Tasks"
        }) ;

    });
};

module.exports.urgent=function(req,res){
    TasksList.find({priority : "urgent"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Urgent Tasks"
        }) ;

    });
};

module.exports.notUrgent=function(req,res){
    TasksList.find({priority : "notUrgent"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Not Urgent Tasks"
        }) ;

    });
};

module.exports.notImp=function(req,res){
    TasksList.find({priority : "notImp"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Not Important Tasks"
        }) ;

    }); 
};