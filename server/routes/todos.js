import express from 'express'
const router = express.Router()
import conn from '../db-connection.js'

router.get('/todos', async (req, res) => {
    const todos = await conn.raw(`
        SELECT * FROM todos;  
    `)
    const rows = todos.rows
    res.json(rows)
})

export default router