import express from "express";
const router = express.Router();
import conn from "../db-connection.js";
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


// search request by description
router.get("/todosearch/:userId/:desc", async (req, res) => {
  console.log(req.params, 'body')
  console.log(`"%${req.params.desc}%"`, req.params.userId , '100')
  const userId = req.params.userId;
  const desc1 = req.params.desc;
  // console.log(desc1,userId, 'all')
  // const {description} = req.body;
  const todos = await conn.raw(`
        SELECT * FROM todos
        WHERE description LIKE ?
        AND user_id=?
    `,
    [desc1, userId]
    );
  const rows = todos.rows;
  res.json(rows)
  console.log(rows)
//   res.json({message:'testing todos search routes'});
 
});

// Search Todos by description
//Read and get Todos  by user_id
router.get("/todos", async (req, res) => {
    const userId = req.user.id;
    const todos = await conn.raw(`
          SELECT * 
          FROM todos
          WHERE user_id=?    
      `,
      [userId]
      );
    const rows = todos.rows;
    console.log(rows);
    res.json(rows);
    // res.json({message:'testing todos routes'})
  });

// Create new Todos
router.post("/todos", async (req, res) => {
  const userId = req.user.id;
  const { description} = req.body;
  await conn.raw(
    `
        INSERT INTO todos (description, status,user_id)
        VALUES( ?,?,?)
    `,
    [description,"active",userId]
  );
  res.json({ message: "Todos added" });
//   res.json({message:'testing todos added'})
});

// update Request
// router.patch("/todosdescription", async (req, res) => {
//     const userId = req.params.userId;
//     const { id,description } = req.body;
//     await conn.raw(`
//           UPDATE todos
//           SET  description=?
//           WHERE id =?
//           `,
//           [description,id]
//           );
//     res.json({message:'Todos  description updated'})
//   });

// Update Todos
  router.patch("/todos/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    await conn('todo')
        .where({id:todoId})
        .update(req.body)       
    res.json({message:'Todos updated'})
  });


//Backend Delete Todos
router.delete("/todos/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    
    await conn.raw(`
          DELETE FROM todos
          WHERE id =? 
          `,
          [todoId]);
    res.json({message:'Todos deleted'})
  });


export default router;
