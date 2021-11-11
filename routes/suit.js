var express = require('express'); 
const suit_controlers= require('../controllers/suit'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', suit_controlers.suit_view_all_Page ); 
module.exports = router;