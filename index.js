const express = require('express');
const app = express();
const port = 3000;


const todos = [
    { id: 1, value: 'Buy groceries' },
    { id: 2, value: 'Finish homework' },
    { id: 3, value: 'Walk the dog' },
    { id: 4, value: 'Call mom' },
    { id: 5, value: 'Go for a run' }
];

const COUNT = 4;

function getTodosHTML(count = COUNT) {
    return `<ul>
    ${todos.slice(0, count).map(todo => `
        <li hx-get="/todos" hx-target="#todo-list">
            <div class="one-line">
                <span hx-swap="outerHTML">${todo.value}</span>
                <button role="button" class="btn-delete" hx-delete="/todos/${todo.id}" hx-target="#todo-list">Delete</button>
            </div>
        </li>
    `).join('')}
    <ul>`;
}

// Serve static files from the "public" folder
app.use(express.static('public'));

app.use(express.json());

app.post('/click', (req, res) => {
    res.send('Hello, World!');
});

app.post('/add', (req, res) => {
    res.send(getTodosHTML(COUNT+1));
});

app.get('/todos', (req, res) => {
    res.send(getTodosHTML(COUNT));
});

app.delete('/todos/:id', (req, res) => {
    res.send(getTodosHTML(COUNT-1));
});







app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
