const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/project',(req,res)=>{
    res.render('project')
})
app.get('/project1',(req,res)=>{
    res.render('projecttry')
})
app.listen(3001,()=>{
    console.log('on port 3001')
})

