const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(
    express.urlencoded({
        extends: true,
    }),
);
app.use(express.json());

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {},
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//http logger
app.use(morgan('combined'));

route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
