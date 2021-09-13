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
    res.render('portfolio/index',{titleName:'Yachna Rana'})
});
app.get('/aboutme',(req,res)=>{
    res.render('portfolio/aboutme', {eduArr, titleName:'About Me - Yachna Rana'})
});
app.get('/projects',(req,res)=>{
    res.render('portfolio/projects', {projArr, titleName:'Projects - Yachna Rana'})
});
app.get('/resume',(req,res)=>{
    res.render('portfolio/resume', {titleName:'Resume - Yachna Rana'})
});


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});