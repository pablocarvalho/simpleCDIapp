const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 4200);

app.use(express.static(__dirname + '/dist/cdi-app-front/index.html'));

app.get('/*',function(req,res){    
    res.sendFile(path.join(__dirname+'/dist/cdi-app-front/index.html'));
})

console.log('Console listening!');