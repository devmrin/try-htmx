var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"



let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')

        db.run(`CREATE TABLE todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insertTodo = 'INSERT INTO todo (id, task) VALUES (?,?)'
                for (let i = 1; i <= 5; i++) {
                    let randomTask = generateRandomTask();
                    db.run(insertTodo, [i, randomTask])
                }
            }
        });
    }
});

function generateRandomTask() {
    let tasks = [
        "Buy groceries",
        "Finish coding assignment",
        "Call mom",
        "Go for a run",
        "Read a book"
    ];
    let randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
}


module.exports = db