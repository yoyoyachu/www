const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const arr = require('./public/static/project-details');
console.log(arr);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


app.get('/index',(req,res)=>{
    res.render('index')
});
app.get('/project',(req,res)=>{
    res.render('project', {arr})
});
app.listen(3001,()=>{
    console.log('on port 3001')
});

