const express=require("express");
const add=express.Router();

function routs(nav){
    add.get('/',(req,res)=>{
        res.render("addbooks",{
            nav,
            title:"Add Books"
        })
    });
    return add;
}
module.exports=routs;