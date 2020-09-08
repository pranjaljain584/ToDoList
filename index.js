const express = require('express') ;

const db = require('./config/mongoose') ;


const app = express() ;
const port =8000 ;

// use express router
app.use('/' , require('./routes/index')) ;

// use static files
app.use(express.static('./assets')) ;

// set up view engine
app.set('view engine' , 'ejs') ;
app.set('views' , './views') ;

// made app listen
app.listen(port , function(err){
    if(err){
        console.log(`Error ${err} in running server`) ;
        return ;
    }
    console.log("server running successfully") ;
}) ;