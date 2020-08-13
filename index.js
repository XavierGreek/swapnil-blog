//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require('lodash');
const homeStartingContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const aboutContent = "";
const contactContent = "";
const mongoose=require('mongoose');
const app = express();
const post = require('./routes/blogpost');
const login= require('./routes/login');
const posts=require('./routes/posts');
const Blogpost=require('./models/dbschema');
const Login=require('./models/loginschema');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb+srv://swapnil-rawat:blogpost@database.kdl58.mongodb.net/blog?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });


app.get('/',async function(req,res)
{
  var posts =await Blogpost.find({});
 res.render('home',{
   post:homeStartingContent,
   posts:posts

});
});


app.get('/contact',function(req,res)
{
 res.render('contact',{contact:contactContent});
});

app.get('/about',function(req,res)
{
 res.render('about',{about:aboutContent});
});

app.use('/blogpost',post);
app.use('/posts',posts);
app.use('/login',login);
app.get('/admin',async function(req,res){
  var login=await Login.find();
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
