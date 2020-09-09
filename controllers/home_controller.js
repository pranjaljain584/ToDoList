// importing database
const db = require('../config/mongoose') ;
const Tasks = require('../models/task') ;

module.exports.home = function(req,res){
    return res.render('home' , {
        title : "To Do List"
    }) ;
};

module.exports.addTask = function(req,res){
    console.log(req) ;
    return res.redirect('back') ;
};


module.exports.today=function(req,res){
    
};


module.exports.nextSevenDays=function(req,res){
    
};