const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb+srv://dhahn123:' + process.env.MONGO_ATLAS_PW + '@cluster0-0cfjb.mongodb.net/test?retryWrites=true', (err) =>
{
    if(err){
        console.log("Could not connect to Mongo DB (Data Center) ");
    }else {
        console.log("DATA CENTER - Connected")
    }
});// CONNECTING TO MONGODB v. 3.6

app.use(morgan('dev'));
//having'/uploads' in front of express.static will allow more specific URL destination
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method=== 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE, GET');
        return res.status(200).json({});
    }
    next(); 
})
//Routes setting up handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//app.use sets up middleware
app.use((req, res, next)=>{
    const error = new Error('Not found'); 
    error.status = 404; 
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.use((req, res, next) => {
    res.status(200).json({
        message: "It works!"
    });
});

module.exports = app;