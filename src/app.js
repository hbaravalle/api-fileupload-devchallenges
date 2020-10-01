const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Running in ${process.env.PORT || 3001}`);
}).on('error', err => console.log(err))