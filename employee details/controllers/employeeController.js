const express = require ('express');
var router = express.Router();

var { Employee } = require('../modules/employee');

// get request 
router.get('/', (req , res) => {
    Employee.find((err, docs) => {
        if(!err) 
        {res. send(docs); }
        else {
            console.log('error in retriving daata :' + JSON.stringify(err, undefined, 2));
        }
    });
});

//get the details by id
router.get('/:id', (req , res) => {
    // if(!ObjectId.isValid(req.params.id))
    // return res.status(400).send(`No record with givin id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in employee save :' + JSON.stringify(err, undefined, 2)); }  
    });
});

// Add details method
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office
    });
    emp.save((err, doc) => { 
        if(!err) { res.send(doc); }
        else { console.log('Error in employee save :' + JSON.stringify(err, undefined, 2)); }
    });
});


//post, update method
router.put('/:id', (req, res) => {
    // if(!ObjectId.isValid(req.params.id))
    //     return res.send.status(400).send(`nod record with id : ${req.params.id} `);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office
    };

    Employee.findByIdAndUpdate( req.params.id, { $set : emp }, { new: true }, (err, doc) =>{
        if(!err) { res.send(doc); }
        else { console.log('Error in updating the file :' + JSON.stringify(err, undefined, 2)); }
    }); 
});


//delete method 
router.delete('/:id', (req, res) => {
    // if(!ObjectId.isValid(req.params.id))
    //     return res.send.status(400).send(`no reord with this id : ${req.params.id}`);
    
    Employee.findOneAndRemove(req.params.id, (err, doc) => {
        if(!err)
            {res.send(doc); }
        else
        { console.log('Error in deleting Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});


//export router module
module.exports = router;