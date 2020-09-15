// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

module.exports.study=function(req,res){

    TasksList.find({category : "Study"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        // console.log(tasks) ;

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Study Tasks"
        }) ;

    }).sort({striked: 1});
};

module.exports.personal=function(req,res){
    TasksList.find({category : "Personal"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Personal Tasks"
        }) ;

    }).sort({striked: 1});
};

module.exports.work=function(req,res){
    TasksList.find({category: "Work"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Work Tasks"
        }) ;

    }).sort({striked: 1});
};

module.exports.other=function(req,res){
    TasksList.find({category: "Other"} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Other Tasks"
        }) ;

    }).sort({striked: 1}); 
};