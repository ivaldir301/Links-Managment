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

   
    addLinksByUserId: async (req, res) => {
        try {
            const linkId = randomNumberGenerator() 
            const { title, label, link_adress, id } = req.body

            // Check if the new random number generated is not equal to an existing id in the links table (altho very unlikely)
            const SqlQuery = "SELECT link_id, title FROM Links WHERE title = ? AND id_user = ?"
            const [links, fields2] = await pool.query(SqlQuery, [title, id])
            if(links[0]) {
                return res.json ({ error: "something went wrong, retry the operation" })   
            }

            const sqlQuery2 = "INSERT INTO Links (link_id, title, label, link_adress, id_user) VALUES (?, ?, ?, ?, ?);"
            const [rows, fields] = await pool.query(sqlQuery2,  [linkId, title, label, link_adress, id])
            
            // Also build a function that when inserted the link in the database by a user
            // it is generated a link_id for the link and them it updates the user's table to add the user's links table
            const userLinksIdUpdateQuery = "INSERT INTO Links (his_link_id) VALUES (?)"
            const [rows2, fields3] = await pool.query(userLinksIdUpdateQuery, [linkId])

            res.json({
                data: rows
            })

            res.json({
                data: rows2
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
            const { title, label, link_adress,linkId} = req.body
            const sqlQuery = "UPDATE Links SET title = ?, label = ?, link_adress = ? WHERE link_id = ?;"
            const [rows, fields] = await pool.query(sqlQuery, [ title, label, link_adress, linkId])
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
            const [rows, fields] = await pool.query("DELETE FROM Links WHERE link_id = ?", [linkId])
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


function randomNumberGenerator() {
    const length = 8    
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}


module.exports = linksmanagmentController

