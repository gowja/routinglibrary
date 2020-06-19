const express=require("express");
const books=express.Router();
function routs(nav){
     var book=[
        {
            title:"Tom and Jerry",
            author:"Joseph Berbara",
            genre:"cartoon",
            img:"tomandjerry.jpg"
        },
        {
            title:"Alchemist",
            author:"Paulo Choelo",
            genre:"Novel",
            img:"alchemi.jpg"
        },
        {
            title:"Harry Potter",
            author:"J K Rowring",
            genre:"Fantacy",
            img:"harry.jpg"
        }
    ]

    books.get("/",function(req,res){
        res.render("books",{
            nav,
            title:"Books",
            book
        })
    })
    return books;
}
module.exports=routs;