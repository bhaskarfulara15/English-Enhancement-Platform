const db = require('../config/db');

// REGISTER
exports.register = (req, res) => {
const { name, email, password, level } = req.body;


const sql = "INSERT INTO users (name, email, password, level) VALUES (?, ?, ?, ?)";

db.query(sql, [name, email, password, level], (err, result) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database error" });
    }

    res.json({ message: "User registered successfully" });
});


};

// LOGIN
exports.login = (req, res) => {
const { email, password } = req.body;

const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

db.query(sql, [email, password], (err, result) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
        res.json({ message: "Login successful", user: result[0] });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

};
