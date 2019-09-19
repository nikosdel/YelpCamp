var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware");
router.get("/",function(req,res){
    Campground.find({},function (err,allCampgrounds) {
        if(err) {
            console.log(err);
        }
        else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }

    });

});

router.post("/",middleware.isLoggedIn ,function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var description=req.body.description;
    var author={
        id:req.user._id,
        username:req.user.username
    };
    var price=req.body.price;
    var newCampground={name:name,image:image,description:description,author:author,price:price};
    //Create a new campground and save to DB
    Campground.create(newCampground,function (err,newCamp) {
        if(err) {
            console.log(err);
        }
        else
        {
            res.redirect("/campgrounds")
        }
    });

});

router.get("/new",middleware.isLoggedIn,function(req, res) {
    res.render("campgrounds/new.ejs");
});

router.get("/:id",function (req,res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err,foundCampground) {
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            res.render("campgrounds/show",{campground:foundCampground});
        }

    })




});
//edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnerShip,function (req,res) {
        Campground.findById(req.params.id,function (err,foundCampground) {
            res.render("campgrounds/edit", {campground: foundCampground});
        });


});


//update campground route

router.put("/:id",middleware.checkCampgroundOwnerShip,function (req,res) {
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function (err,updateCampgrounds) {
    if(err){
        res.redirect("/campgrounds");
    }
    else{
        res.redirect("/campgrounds/"+req.params.id);
    }
    })
});

//Destroy campground
router.delete("/:id",middleware.checkCampgroundOwnerShip,function (req,res) {
   Campground.findByIdAndRemove(req.params.id,function (err) {
       if(err){
           res.redirect("/campgrounds");
       }
       else{
           res.redirect("/campgrounds");
       }
   })
});




module.exports=router;