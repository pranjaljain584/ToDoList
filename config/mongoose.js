const mongoose = require('mongoose') ;
// connect to database
mongoose.connect('mongodb://localhost/to_do_list_db') ;
// acquire connection to check if success
const db = mongoose.connection ;
// if there is error
db.on('error' , console.error.bind(console , 'error db')) ;
// up and running
db.once('open' , function(){
    console.log("db success") ;
});

// export database
module.exports =db ;