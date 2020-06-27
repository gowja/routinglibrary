const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const schema=mongoose.Schema;
const schema1=mongoose.Schema;


const signup=new schema({
    name:String,
    age:String,
    gender:String,
    authority:String,
    email:String,
    phone:String,
    password:String
});

const signin=new schema1({
    semail:String,
    spassword:String
});


var signupdata=mongoose.model('signupdata',signup);
var signindata=mongoose.model('signindata',signin);


module.exports=signupdata;
module.exports=signindata;