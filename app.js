var express    =require("express"),
app            =express(),
http           =require('http'),
server         =http.createServer(app),
mongoose       =require("mongoose"),
passport       =require("passport"),
localStrategy  =require("passport-local"),
User           =require("./models/user"),
Campground     =require("./models/campground"),
methodOverride=require("method-override");
seedDB         =require("./seeds"),
bodyParser     =require("body-parser");
flash=require("connect-flash");


var commentRoutes=require("./routes/comments"),
    campgroundRoutes=require("./routes/campgrounds"),
    indexRoutes=require("./routes/index");
//seedDB();
Comment=require("./models/comment");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+ '/public'));
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"kagkouras",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req,res,next) {
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

server.listen(3000);
console.log('Express server started on port %s',server.address().port);