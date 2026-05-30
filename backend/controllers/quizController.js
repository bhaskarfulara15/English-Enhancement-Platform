const db = require('../config/db');

exports.submitQuiz = (req, res) => {
const { user_id, score } = req.body;

console.log("Received:", user_id, score); // DEBUG

const sql = "INSERT INTO results (user_id, score, type) VALUES (?, ?, 'quiz')";

db.query(sql, [user_id, score], (err, result) => {
    if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Saved successfully" });
});

};
