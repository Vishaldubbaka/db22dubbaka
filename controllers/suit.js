var Suit = require('../models/suit'); 
 
// List of all Suits 
exports.suit_list = async function(req, res) { 
    try{ 
        theSuit = await Suit.find(); 
        res.send(theSuit); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Suit. 
exports.suit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit detail: ' + req.params.id); 
}; 
 
// Handle Suit create on POST. 
exports.suit_create_post =async function(req, res) { 
    console.log(req.body) 
    let document = new Suit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.suit = req.body.suit; 
    document.size = req.body.size; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Suit delete form on DELETE. 
exports.suit_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit delete DELETE ' + req.params.id); 
}; 
 
// Handle Suit update form on PUT. 
exports.suit_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Suit update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.suit_view_all_Page = async function(req, res) { 
    try{ 
        theSuits = await Suit.find(); 
        res.render('suit', { title: 'Suit Search Results', results: theSuits }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 