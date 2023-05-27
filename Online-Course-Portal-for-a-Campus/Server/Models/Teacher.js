const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});
mongoose.connect("mongodb+srv://hima707ch:7073928944@himanshu.rdk9j5d.mongodb.net/Blogger?retryWrites=true&w=majority",{useNewUrlParser : true});

const teacher_schema = new mongoose.Schema ({
    Name : String,
    Subject : String,
    teacher_id : String,
    Password : String,
    Courses : Array,
});

const Teacher = mongoose.model("teacher", teacher_schema);

module.exports = Teacher;