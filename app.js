const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const path = require('path');
const { router } = require('./routes/routes');

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'view')));

app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/addEmployee', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'addEmployee.html'));
});

app.get('/updateEmployee', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'updateEmployee.html'));
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Example App Listening on port ${port}`);
});
