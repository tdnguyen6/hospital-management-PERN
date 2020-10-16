const express = require('express');
const app = module.exports = express();
const session = require('express-session');
const path = require('path');
const pgp = require('pg-promise');
const db = require('db');

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
app.post();
app.listen(3000);