const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee.js');


// localhost:3000/employees
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
res.json(docs);

    });
});


router.get('/:id', (req, res)=>{
    Employee.findOne({id: req.params.id}, function(err,Employee){
        if(err){
            res.json(err);
        }
        else {
            res.json(Employee);
        }
    });
});

router.post('/',(req, res) => {
    var emp = new Employee({
        id: req.body.id,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, Employee)=>{
        if(err)
        {
        res.json({msg:'Failed to add the data'});
        }
        else
        {
            res.json({msg:'data added successfully',data:Employee});
        }
    });
});
router.put('/:id',(req,res)=>{
    if(!req.params.id){
    return res.status(400).send(`No record found with given id: ${req.params.id}`)};
    var emp = {
        id: req.body.id,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.update({id: req.params.id}, { $set: emp },
        { new: true },(err,doc)=>{
            if(!err) { res.send(doc); }
        else { console.log('Error in Employee update : ' + JSON.stringify(err, undefined, 2)); }
        } );
});
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found with given id: ${req.params.id}`)};
        Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(!err) { res.send(doc); }
        else { console.log('Error in Employee delete : ' + JSON.stringify(err, undefined, 2)); }
        });
});



module.exports = router;