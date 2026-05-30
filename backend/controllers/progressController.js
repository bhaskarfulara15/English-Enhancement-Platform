const db = require('../config/db');

exports.getProgress = (req, res) => {
const user_id = req.params.user_id;

const sql = `
    SELECT 
        COUNT(*) AS totalQuiz,
        AVG(score) AS avgScore
    FROM results
    WHERE user_id = ?
`;

db.query(sql, [user_id], (err, result) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching progress" });
    }

    res.json(result[0]);
});


};
