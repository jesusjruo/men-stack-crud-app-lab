require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const dogRouter = require('./controllers/dog');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use('/' , dogRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening to port:', PORT)
});