const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    category: { type: String, required: true },
    address : { type:String, required: true },
    mobileNumber : {type:String, required:true},
    percentage : { type:String , required:true}
    }, {
        timestamps: true,
    });

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;