const router = require('express').Router();
let Students = require('../models/students.model');

router.route('/').get((req, res) => {
  Students.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const fatherName = req.body.fatherName;
  const category = req.body.category;
  const address = req.body.address;
  const mobileNumber= req.body.mobileNumber;
  const percentage = req.body.percentage;

  const newStudent = new Students({
    name,
    fatherName,
    category,
    address,
    mobileNumber,
    percentage
  });

  newStudent.save()
  .then(() => res.json('New Student added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;