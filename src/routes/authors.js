const express=require("express");
const authors=express.Router();

function routs(nav){
    var athr=[
        {
            name:"Paulo Choleo",
            about:"Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school.[citation needed] As a teenager, Coelho wanted to become a writer.",
            img:"download.jpg"
        },
        {
            name:"Paulo Choleo",
            about:"Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school.[citation needed] As a teenager, Coelho wanted to become a writer.",
            img:"download.jpg"
        },
        {
            name:"Paulo Choleo",
            about:"Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school.[citation needed] As a teenager, Coelho wanted to become a writer.",
            img:"download.jpg"
        }
    ]
    authors.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:"Authors",
            athr
        })
    });
    return authors;
}
module.exports=routs;