const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const projArr = require('./public/static/project-details');
const eduArr = require('./public/static/edu-details');


app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('portfolio/index')
});
app.get('/aboutme',(req,res)=>{
    res.render('portfolio/aboutme', {eduArr})
});
app.get('/project',(req,res)=>{
    res.render('portfolio/project', {projArr})
});
app.get('/try',(req,res)=>{
    res.render('portfolio/try')
});
app.listen(3000,()=>{
    console.log('on port 3000')
});

