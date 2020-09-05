const express = require('express') ;
const app = express() ;
const port =8000 ;

// use express router
app.use('/' , require('./routes/index')) ;


app.listen(port , function(err){
    if(err){
        console.log(`Error ${err} in running server`) ;
        return ;
    }
    console.log("server running successfully") ;
}) ;