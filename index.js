const express= require('express');
const morgan = require('morgan');
const cors= require('cors');

const app= express();
app.listen('5050',()=>console.log("Server started at port 5050"));



