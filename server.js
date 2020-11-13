const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist'));

app.listen(process.env.PORT || 4200);

app.get('/*',function(req,res){
    res.sendFile('/dist/index.html');
})

console.log('Console listening!');