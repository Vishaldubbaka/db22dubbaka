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
exports.suit_detail= async function(req, res) { 
    console.log("detail "  + req.params.id) 
    try { 

        result = await Suit.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.suit_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Suit.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.suit)  
               toUpdate.suit = req.body.suit; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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