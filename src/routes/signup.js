const express=require("express");
const signup=express.Router();

function routs(nav){
    signup.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:"Signup"
        });
    });
    return signup;
}
module.exports=routs;