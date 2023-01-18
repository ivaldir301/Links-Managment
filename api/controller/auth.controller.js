const pool = require('../database/index')
const bcrypt = require('bcrypt')
const authController = {
    verifyUserByEmailAndRegister: async (req, res) => {
        try {
            const { id , userName, userEmail, userPassword } = req.body
            const sqlQuery = "SELECT id, nome, email FROM Users WHERE email = ?"
            const [user, fields] = await pool.query(sqlQuery, [userEmail])
            if(user[0]) return res.json({ error: "email is already being used by another user"})

            const hashedPassword = await bcrypt.hash(userPassword, 10)

            const sqlQuery1 = "INSERT INTO Users (id, nome, email, user_password) VALUES (?, ?, ?, ?);"
            const [rows, fields2] = await pool.query(sqlQuery1, [ id, userName, userEmail, hashedPassword ])

            if(rows.affectedRows){
                return res.json({ message: "operation sucessful"})
            } else{
                return res.json({ error: "error during the registration process"})
            }
        } catch (error) {
            console.log(error)
            res.json({
                error: error.message
            })
        }
    }
}

module.exports = authController