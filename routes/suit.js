var express = require('express'); 
const suit_controlers= require('../controllers/suit'); 
var router = express.Router(); 
 
/* GET suits */ 
router.get('/', suit_controlers.suit_view_all_Page ); 

/* GET detail suit page */ 
router.get('/detail', suit_controlers.suit_view_one_Page); 

/* GET create suit page */ 
router.get('/create', suit_controlers.suit_create_Page); 

/* GET create update page */ 
router.get('/update', suit_controlers.suit_update_Page); 

/* GET create suit page */ 
router.get('/delete', suit_controlers.suit_delete_Page); 


module.exports = router;