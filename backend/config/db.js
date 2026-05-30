const mysql = require('mysql2');

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '143@bhaskar', // put your MySQL password here
database: 'english_app'
});

db.connect((err) => {
if (err) {
console.log('Database connection failed:', err);
} else {
console.log('MySQL Connected');
}
});

module.exports = db;
