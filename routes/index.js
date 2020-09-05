const express = require('express') ;

const router = express.Router() ;
const homeController = require('../controllers/home_controller') ; // required home controller

router.get('/' , homeController.home) ;



module.exports = router ;