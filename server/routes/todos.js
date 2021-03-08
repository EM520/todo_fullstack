import express from "express";
const router = express.Router();
import conn from "../db-connection.js";
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


// search request by description
router.get("/todosearch/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { description} = req.body;
  const todos = await conn.raw(`
        SELECT * FROM todos
        WHERE description LIKE  ?
        AND user_id=?
    `,
    [description,userId]
    );
  const rows = todos.rows;
  res.json(rows)
//   res.json({message:'testing todos search routes'});
 
});

//Read and get request by user_id
router.get("/todos/:userId", async (req, res) => {
    const userId = req.params.userId;
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

// Add request body
router.post("/todos/:userId", async (req, res) => {
  const { description, status,user_id } = req.body;
  await conn.raw(
    `
        INSERT INTO todos (description, status,user_id)
        VALUES( ?,?,?)
    `,
    [description, status,user_id]
  );
  res.json({ message: "Todos added" });
//   res.json({message:'testing todos added'})
});

// update Request
router.patch("/todos", async (req, res) => {
    const userId = req.params.userId;
    const { id,description } = req.body;
    await conn.raw(`
          UPDATE todos
          SET  description=?
          WHERE id =?
          `,
          [description,id]
          );
    res.json({message:'Todos  description updated'})
  });


  router.patch("/todos", async (req, res) => {
    const userId = req.params.userId;
    const { id, status } = req.body;
    await conn.raw(`
          UPDATE todos
          SET status=? 
          WHERE id =?
          `,
          [ status,id]
          );
    res.json({message:'Todos status updated'})
  });


//delete Request
router.delete("/todos", async (req, res) => {
    // const userId = req.params.userId;
    const { id } = req.body;
    await conn.raw(`
          DELETE FROM todos
          WHERE id =?
          `,
          [id]);
    res.json({message:'Todos deleted'})
  });


export default router;
