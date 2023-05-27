const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});
mongoose.connect("mongodb+srv://hima707ch:7073928944@himanshu.rdk9j5d.mongodb.net/Blogger?retryWrites=true&w=majority",{useNewUrlParser : true}).then(() => {
    console.log("database connected");
});

const course_schema = new mongoose.Schema ({
    Name : String,
    Subject : String,
    Course_id : String,
    Title : String,
    Content : String
});

const Course = mongoose.model("course", course_schema);

module.exports = Course;