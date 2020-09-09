const express = require('express') ;
const app = express() ;
const port =8000 ;
// require ejs layouts
// const expressLayouts = require('express-ejs-layouts') ;

// use layouts before router
// app.use(expressLayouts) ;
// extract styles and scripts from sub pages into layout
// app.set('layout extractStyles' , true) ;
// app.set('layout extractSc')

// use express router
app.use('/' , require('./routes/index')) ;

// use static files
app.use(express.static('./assets')) ;

// set up view engine
app.set('view engine' , 'ejs') ;
app.set('views' , './views') ;

// parser that will help decoding form's data
app.use(express.urlencoded()) ;

// made app listen
app.listen(port , function(err){
    if(err){
        console.log(`Error ${err} in running server`) ;
        return ;
    }
    console.log("server running successfully") ;
}) ;