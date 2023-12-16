// phần import module
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// const session = require('express-session');
// const cookieSession = require('cookie-session');
var logger = require('morgan');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//server
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));




//Các định tuyến
RouterMains(app)




const port = process.env.PORT || 443; // Cổng cho HTTPS là 443
app.listen(port, (req, res) => {
	console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
})



// app.get('/upload/:imageName', (req, res) => {
//     const imageName = req.params.imageName;
//     res.sendFile(path.join(__dirname,"../uploads", imageName));
// });






// // phần HTTPS
// var path = require('path')
// // Đọc tệp chứng chỉ SSL tự ký
// const privateKey = fs.readFileSync(path.join(__dirname + "\\private.key"));
// const certificate = fs.readFileSync(path.join(__dirname + '\\certificate.crt'));
// const credentials = { key: privateKey, cert: certificate };
// // Tạo máy chủ HTTPS
// const httpsServer = https.createServer(credentials, app);
// const port = process.env.PORT || 443; // Cổng cho HTTPS là 443
// httpsServer.listen(port, () => {
// 	console.log(`Máy chủ đang lắng nghe tại https://localhost:${port}`);
// });