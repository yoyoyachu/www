const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const arr = require('./public/static/project-details');
const eduDetails = require('./public/static/education-details');


app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('portfolio/index')
});
app.get('/aboutme',(req,res)=>{
    res.render('portfolio/aboutme', {eduDetails})
});
app.get('/timeline',(req,res)=>{
    res.render('portfolio/timeline', {arr})
});
app.listen(3001,()=>{
    console.log('on port 3001')
});

