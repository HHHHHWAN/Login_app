const express = require('express');
const rootPage = require('./src/router');
const path = require('path');
require('dotenv').config()
const app = express();
const DB = require('mysql2');
const port = 3300;

// app.set('view engine', 'ejs');
// app.use('/', rootPage);

const user_DB = DB.createConnection({
	host : 'db', // mysql-container 
    user : 'sqlmain',
    password : 'sqltest1',
    database : 'docker_test_DB',
});

user_DB.connect((err) => {
	if (err) { // promise 값 check 
		console.error('MySQL 연결 실패 : ', err);
		return;
		}
		console.log('MySql ( user_DB ) Connect Success');   
});


app.set('views', path.join(__dirname,'/templates'));




// app.get('/', (req, res)=>{
// 	res.render('Main_Login.ejs');
// });
//
app.use('/', rootPage);

app.listen(port,() => {
	console.log('server start ');
});



