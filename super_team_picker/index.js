// Ran into some issues when trying to install knexfile for creating tables...
// Still can't seem to find a fix...
// Also I know functionality really isn't there...

const { response } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const logger = require('morgan');
app.use(logger('dev'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (require, response) => {
    response.render('home');
});

app.get('/cohorts', (require, response) => {
    response.render('cohorts');
});

app.get('/new', (require, response) => {
    response.render('newCohorts');
});



const PORT = 3000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`);
});