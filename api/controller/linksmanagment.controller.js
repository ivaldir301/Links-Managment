const pool = require("../database/index")

const linksmanagmentController = {
    getLinksByUserId: async (req, res) => {
        try {
            const { id } = req.params
            const [rows,fields] = await pool.query("SELECT * FROM Links WHERE id_user = ?", [id])  
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    }, 
    
    // Also build a function that when inserted the link in the database by a user,
    // it generates a link_id for the link
    addLinksByUserId: async (req, res) => {
        try {
            const { link_id, title, label, link_adress, id_user } = req.body
            const verificationQuery = "SELECT link_id, title, label, link_adress, id_user FROM Links WHERE title = ? AND id_user = ?"
            const [links, linkFields] = await pool.query(verificationQuery, [title, id_user])
            if(links[0]) return res.json({ error: "this link is already registered" })

            const sqlQuery = "INSERT INTO Links (link_id, title, label, link_adress, id_user) VALUES (?, ?, ?, ?, ?);"
            const [rows, fields] = await pool.query(sqlQuery,  [link_id, title, label, link_adress, id_user])

            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error inserting in the database"
            })
        }
    },

    editLinksByUserId: async (req, res) => {
        try {
            const { title, linkId, newTitle, newLabel, newLinkAdress} = req.body
            const sqlQuery = "UPDATE Links SET title = ?, label = ?, link_adress = ? WHERE title = ? AND link_id = ?;"
            const [rows, fields] = await pool.query(sqlQuery, [newTitle, newLabel, newLinkAdress, title, linkId])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error updating data in the database"
            })
        }
    },

    deleteLinksByUserId: async (req, res) => {
        try {
            const { linkId } = req.params 
            const [rows, fields] = await pool.query("DELETE FROM Links WHERE link_id = ?;", [linkId])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: "error deleting the data from the database"
            })
            console.log(error)
        }
    }
}

/*
function randomNumberGenerator() {
    const length = 8    
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
*/

module.exports = linksmanagmentController

