import sqlite3 from 'sqlite3'

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to the SQLite database.')

        db.run(`CREATE TABLE todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task text
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                const insertTodo = 'INSERT INTO todo (id, task) VALUES (?,?)'
                for (let i = 1; i <= 5; i++) {
                    const randomTask = generateRandomTask()
                    db.run(insertTodo, [i, randomTask])
                }
            }
        })
    }
})

function generateRandomTask() {
    const tasks = [
        "Buy groceries",
        "Finish coding assignment",
        "Call mom",
        "Go for a run",
        "Read a book"
    ]
    const randomIndex = Math.floor(Math.random() * tasks.length)
    return tasks[randomIndex]
}

export default db
