const express=require("express");
const signin=express.Router();
function routs(nav){
    signin.get('/',function(req,res){
        res.render("signin",
        {
            nav,
            title:"Signin"
        });
    })
    return signin;
}
module.exports=routs;