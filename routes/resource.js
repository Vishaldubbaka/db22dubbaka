var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var suit_controller = require('../controllers/suit'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// suit ROUTES /// 
 
// POST request for creating a suit.  
router.post('/resource/suits', suit_controller.suit_create_post); 
 
// DELETE request to delete suit. 
router.delete('/resource/suits/:id', suit_controller.suit_delete); 
 
// PUT request to update suit. 
router.put('/resource/suits/:id', 
suit_controller.suit_update_put); 
 
// GET request for one suit. 
router.get('/resource/suits/:id', suit_controller.suit_detail); 
 
// GET request for list of all suit items. 
router.get('/resource/suits', suit_controller.suit_list); 
 
module.exports = router; 