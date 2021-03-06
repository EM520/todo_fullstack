import express from 'express'
const router = express.Router()
// const app=express()
import conn from '../db-connection.js'

router.get('/todos', (req, res) => {
    const userId = req.params.userId
    const todos = await conn.raw(`
        SELECT
        todos.todo_id ,
        todos.description,
        todos.status,
        FROM todos
        INNER JOIN users ON todos.todo_id = users.id;
    `)
    const rows = todos.rows
    console.log(rows)
    res.json(rows)
    // res.json({message:'testing todos routes'})
})

export default router