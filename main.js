'use strict';
const express = require('express');
const path = require('path');

const app = express(); 

app.listen(process.env.PORT || 3000, () =>{
    console.log('I Love You 3000');

}); 

app.use('/images', express.static(path.join(__dirname, '/images'))); 
app.use('/main.css', express.static(path.join(__dirname, '/main.css'))); 

//////////////////

app.get('/index.html', (req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
}); 

app.get('/first_cavs.html', (req,res) =>{
    res.sendFile(path.join(__dirname, '/first_cavs.html'));
});

app.get('/lakers.html', (req,res) =>{
    res.sendFile(path.join(__dirname, '/lakers.html'));
});

app.get('/miami.html', (req,res) =>{
    res.sendFile(path.join(__dirname, '/miami.html'));
});

app.get('/second_cavs.html', (req,res) =>{
    res.sendFile(path.join(__dirname, '/second_cavs.html'));
});