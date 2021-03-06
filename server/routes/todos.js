import express from 'express'
const router = express.Router()
import conn from '../db-connection.js'

router.get('/todos', (req, res) => {
    const userId = req.params.userId
    const todos = await conn.raw(`
    SELECT * FROM todos
    `)
    const rows=todos.rows
    res.json(rows)
    
    // res.json({message:'testing todos routes'})
})

export default router

// //     SELECT
//     //     todos.todo_id ,
//     //     todos.description,
//     //     todos.status,
//     //     FROM todos    //     INNER JOIN users ON todos.todo_id = users.id;   const rows = todos.rows
     
    // const userId = req.params.userId
    // const todos = await conn.raw(`
    // SELECT * FROM todos
    // `)
    // res.json(todos)