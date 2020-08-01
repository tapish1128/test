const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let PORT = 8103
let MONGO_URL = "mongodb://localhost:27017/test"

const api = require('./api/routes/index');


app.get('/', (req, res) => {res.send(' test API')});
app.use('/api',api);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: error.status,
        message: error.message
    });
});  

mongoose.connect(MONGO_URL,  { useNewUrlParser: true }).then(() => console.log('Mongo Connected'));
app.listen(PORT, () => console.log('Server started on: ' + PORT ));



mongoose.Promise = global.Promise;
module.exports = app;

