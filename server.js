const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist'));

app.listen(process.env.PORT || 4200);

app.use(express.static(__dirname + '/dist/index.html'));

app.get('/*',function(req,res){    
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})

console.log('Console listening!');