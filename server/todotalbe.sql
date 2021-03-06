
CREATE TABLE todos(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  status BOOL,
  user_id int REFERENCES users(id)
);

--users table
ALTER TABLE users
     ADD COLUMN first_name VARCHAR (50),
     ADD COLUMN   last_name VARCHAR (50),
     ADD COLUMN   email VARCHAR (100) ;