mongoose=require("mongoose");
var passportLocalManager=require("passport-local-mongoose");

var UserSchema=new mongoose.Schema({
    username:String,
    password:String
});
UserSchema.plugin(passportLocalManager);
module.exports=mongoose.model("User",UserSchema);