// phần import module
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');

var logger = require('morgan');
const cors = require('cors');
require("dotenv").config()

import RouterMains from '../routes/router';

var app = express();


// MIDDLEWARE
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// morgan setup 
app.use(logger('dev'));
// xử lý file, json, url, cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



//server
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
}));





//Các định tuyến
RouterMains(app)




const port = process.env.PORT || 443; // Cổng cho HTTPS là 443
app.listen(port, (req, res) => {
	console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
})

