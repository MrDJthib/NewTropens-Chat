var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var user = {};
var app = express();

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_page_mailboxes'] }));

app.get('/auth/facebook/callback',
	passport.authenticate('facebook', { scope: ['read_page_mailboxes'] }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

passport.use(new FacebookStrategy({
    clientID: 1593892320930098,
    clientSecret: '3de5782779344d41d93296a8b8802c02',
    callbackURL: "http://localhost:4000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
   	console.log(accessToken + profile);
  }
));

module.exports = app;