// same instance of express as that in index js
const express = require('express') ; 

const router = express.Router() ;

// required home controller
const priorityController = require('../controllers/priority_controller') ; 

router.get('/imp' , priorityController.imp ) ;

router.get('/urgent', priorityController.urgent) ;

router.get('/notUrgent' , priorityController.notUrgent) ;

router.get('/notImp' , priorityController.notImp) ;

// exporting so that it is available to index file 
module.exports = router ;