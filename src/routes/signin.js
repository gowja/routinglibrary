const express=require("express");
const signin=express.Router();
const signupdata=require('../model/signupdata');
const signindata=require('../model/signupdata');


function routs(nav){
    signin.get('/',function(req,res){
        res.render("signin",
        {
            nav,
            title:"Signin"
        });
    })

    signin.post('/in',function(req,res){
        var obj={
            mail:req.body.email,
            pw:req.body.password
        }
        var valid=signindata(obj);
        signupdata.findOne({email:valid.mail,password:valid.pw},function(err,user){
            if(err){
                res.send(err);
            }
            res.redirect('/');
        })
        // .then(function(detail){
        //     if(detail.password==pw){
        //     res.redirect('books');
        //     }
        //     else{
        //         alert("password doesnot match");
        //     }
        // })
        // .catch(res.send(mail+pw))
    })
    
    return signin;
}
module.exports=routs;