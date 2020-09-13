// importing database
const db = require('../config/mongoose') ;
const TasksList = require('../models/task') ;

const today = new Date();
if(today.getMonth() + 1 >= 10){
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate();
    var nextSeven = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  (today.getDate()+7) ;
}else{
    var date = today.getFullYear() + "-0" + (today.getMonth()+1) + '-' +  today.getDate();
    var nextSeven = today.getFullYear() + '-0' + (today.getMonth()+1) + '-' +  (today.getDate()+7)
}

// const nextSeven = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);

module.exports.home = function(req,res){

    TasksList.find({} ,function(err, tasks){
        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "All Tasks"
        });

    }).sort({taskDate : 1});

};

module.exports.addTask = function(req,res){

    TasksList.create({
        
        taskName : req.body.taskName ,
        taskDate : req.body.taskDate ,
        category : req.body.category ,
        description : req.body.description ,
        priority : req.body.priority ,
        created : req.body.taskDate

    }, function(err, newTask){

        if(err){
            console.log('err in creating task') ;
            return ;
        }
        // console.log('******' , newTask) ;
        return res.redirect('back') ;

    });
};

module.exports.today=function(req,res){
    
    TasksList.find({created: {$eq: date}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due Today"
        }) ;

    });

};

module.exports.duePassed=function(req,res){
    
    TasksList.find({created: {$lt: date}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due Date Passed"
        }) ;

    });

};

module.exports.nextSevenDays=function(req,res){

    TasksList.find({created: {$gt: date , $lte :nextSeven}} ,function(err, tasks){

        if(err){
            console.log('error in fetching contact from db') ;
            return ;
        }

        return res.render('home' , {
            title : "To Do List" , 
            task_list :  tasks ,
            sub_title : "Due in 7 Days"
        }) ;

    });

};