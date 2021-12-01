var express = require('express'); 
const suit_controlers= require('../controllers/suit'); 
var router = express.Router(); 
 
/* GET suits */ 
router.get('/', suit_controlers.suit_view_all_Page ); 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET detail suit page */ 
router.get('/detail', suit_controlers.suit_view_one_Page); 

/* GET create suit page */ 
router.get('/create',secured, suit_controlers.suit_create_Page); 

/* GET create update page */ 
router.get('/update',secured, suit_controlers.suit_update_Page); 

/* GET create suit page */ 
router.get('/delete', secured,suit_controlers.suit_delete_Page); 


module.exports = router;