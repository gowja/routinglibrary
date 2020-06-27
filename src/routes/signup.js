const express=require("express");
const signup=express.Router();
const signupdata=require('../model/signupdata');
const signindata=require('../model/signupdata');

function routs(nav){
    signup.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:"Signup"
        });
    });

    signup.post('/success',(req,res)=>{
        var item={
           name: req.body.name,
           age: req.body.age,
           gender: req.body.gen,
           authority: req.body.authority,
           email:req.body.email,
           phone:req.body.phone,
           password:req.body.password
        };
        var sign=signindata(item);
        var details=signupdata(item);
        details.save();
        sign.save();
        res.redirect('/signin');
        // res.send("added"+req.body.name+req.body.email);
    });

    return signup;
}
module.exports=routs;