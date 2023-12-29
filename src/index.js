const express = require('express');
const handlebars = require('express-handlebars');

const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3002;


app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'))

app.use(express.json());

//http logger
app.use(morgan('combined'));

//template enigine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a+ b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`app listening on at http://localhost:${port}`);
});
