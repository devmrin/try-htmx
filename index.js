const express = require("express");
const bodyParser = require("body-parser");

const db = require("./database.js");

const app = express();
const port = 3000;

function getTodosHTML(todos) {
  return `<ul>
    ${todos
      .map(
        (todo) => `
        <li hx-get="/todos" hx-target="#todo-list">
            <div class="one-line">
                <span hx-swap="outerHTML">${todo.value}</span>
                <button role="button" class="btn-delete" hx-delete="/todos/${todo.id}" hx-target="#todo-list">Delete</button>
            </div>
        </li>
    `
      )
      .join("")}
    <ul>`;
}

function getTodosFromDB(req, res) {
  db.all("SELECT * FROM todo", (error, rows) => {
    if (error) {
      console.error("Error retrieving todos from database:", error);
      res.status(500).send("Internal Server Error");
    } else {
      const todos = rows.map((row) => ({ id: row.id, value: row.task }));
      res.status(200).send(getTodosHTML(todos));
    }
  });
}

// Serve static files from the "public" folder
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
  const task = req.body.task;
  var insertTodo = "INSERT INTO todo (id, task) VALUES (?,?)";
  db.run(insertTodo, [Date.now(), task], (error) => {
    if (error) {
      console.error("Error inserting new todo:", error);
      res.status(500).send("Internal Server Error");
    } else {
      getTodosFromDB(req, res);
    }
  });
});

app.get("/todos", (req, res) => {
  getTodosFromDB(req, res);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM todo WHERE id = ?", id, (error) => {
    if (error) {
      console.error("Error deleting todo:", error);
      res.status(500).send("Internal Server Error");
    } else {
      getTodosFromDB(req, res);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
