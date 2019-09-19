var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");
var data=[
    {
        name:"Clouds rest",
        image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    },
    { name:"Second camp",
       image:"https://greatplainsconservation.com/wp-content/uploads/2019/02/2019-great-plains-sapi-explorers-camp-12.jpg",
        description:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""

    },{
        name:"Third camp",
        image:"https://t-ec.bstatic.com/images/hotel/max1024x768/120/120968658.jpg",
        description:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    }
];

function seedDB() {
    //remove campgrounds
    Campground.remove({}, function (err) {
        // if (err) {
        //     console.log(err)
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function (seed) {
        //     Campground.create(seed,function (err,campground) {
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             console.log("added a camp");
        //             //Create a comment
        //             Comment.create({
        //                 text:"This place is great, but i wish there was internet",
        //                 author:"Homer"
        //             },function (err,comment) {
        //                 if(err){
        //                     console.log(err);
        //                 }else {
        //
        //
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Create a new comment");
        //                 }
        //             });
        //
        //         }
        //     })
        // });
    });

    //add new campgrounds


}
module.exports=seedDB;