const express = require('express');
// const path = require('path');
// const routes = require('./routes/routes')

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up static packages
app.use('/public', express.static('public'));


// set homepage
app.get('/', (req, res) => {
  res.render('home');
});

// create 404 route
app.get('/404', (req, res) => {
  res.render('404');
});





app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});

