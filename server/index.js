const express = require('express');
const app = module.exports = express();
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise');
const Router = require('express-promise-router');
const db = require('./db');


// configuration
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({
	resave: false, // don't save session if unmodified
	saveUninitialized: false, // don't create session unitl something stored
	secret: 'Very secret hehe'
}))


// do some routing
app.get("/", (request, response) => response.redirect('login'));
app.get("/logout", (request, response) => request.session.destroy( () => response.redirect('/')));
app.get("/login", (request, response) => response.render('login.ejs'));
app.get("/register", (request, response) => response.render('register.ejs'));

// testing variables
let email = "tidu.nguyen12.2000@gmail.com";
let password = "patient12";
let name = 'christy';

// check if account can be registered
async function checkRegister() {
	try {
		const account = await db.query(`SELECT * FROM accounts where email = $1`, [email]);	
		if (account.rows.length > 0) return true;
		else return false;
	} catch(error) {
		console.log(error);
	}
}

async function checkRegister() {
	try {
		const account = await db.query(`INSERT INTO accounts (name, email, password, phone) VALUES($1,$2,$3,$4)`, [name, email, password, '010']);
		console.log(account);	
	} catch(error) {
		console.log(error);
	}
}

// check if account can be logged in 
async function checkLogin() {
	try {
		const account = await db.query(`SELECT * FROM accounts where email = $1 and password = $2`, [email, password]);	
		if (account.rows.length > 0) console.log("Account is correct");
		else console.log("Account is not correct");
	} catch(error) {
		console.log(error);
	}

}
checkRegister();
//checkLogin();
app.listen(3000);