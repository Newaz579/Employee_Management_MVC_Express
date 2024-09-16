const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123Newaz@',
    database: 'employee_management'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MYSQL CONNECTED...');
})

module.exports = {
    db
};