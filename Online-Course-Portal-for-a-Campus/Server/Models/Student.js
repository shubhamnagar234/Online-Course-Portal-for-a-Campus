const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});
mongoose.connect("mongodb+srv://hima707ch:7073928944@himanshu.rdk9j5d.mongodb.net/Blogger?retryWrites=true&w=majority",{useNewUrlParser : true});

const student_schema = new mongoose.Schema ({
    Name : String,
    Class : String,
    Branch : String,
    Stu_id : String,
    Password : String,
    Enrolled_courses : Array,
});

const Student = mongoose.model("student", student_schema);

module.exports = Student;