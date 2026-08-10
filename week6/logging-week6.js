const express = require('express');
const app = express();
const PORT = 3000;

/**
 * ============================================================
 * 1. BUILT-IN MIDDLEWARE
 * ============================================================
 *
 * This allows Express to read JSON data sent in the body
 * of POST and PUT requests.
 *
 * Without this, req.body will be undefined.
 */
app.use(express.json());

/**
 * ============================================================
 * 2. CUSTOM LOGGING MIDDLEWARE (GLOBAL)
 * ============================================================
 *
 * This middleware runs for EVERY request that hits the server.
 */

app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    // Prints the time, HTTP method and URL accessed
    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );
    /**
     * IMPORTANT:
     * next() tells Express to move to the next middleware
     * or route.
     *
     * If you forget next(), the browser will keep waiting.
     */

    next();
});

/**
 * ============================================================
 * 3. CUSTOM SECURITY MIDDLEWARE
 * ============================================================
 *
 * This is an example security check.
 *
 * It checks whether the request contains a User-Agent.
 */

app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');
    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }
    // If everything is fine, proceed to the routes
    next();
});
/**
 * ============================================================
 * MOCK DATABASE
 * ============================================================
 *
 * We are not using MongoDB/MySQL here.
 * The data is stored temporarily in this array.
 *
 * If the server is restarted, the data will return
 * to this initial state.
 */
let tasks = [
    {
        id: 1,
        title: "Learn Express"
    },
    {
        id: 2,
        title: "Master REST APIs"
    }
];
/**
 * ============================================================
 * ROUTES
 * ============================================================
 */
/**
 * ============================================================
 * GET - Read all tasks
 * ============================================================
 *
 * URL:
 * GET http://localhost:3000/tasks
 */
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

/**
 * ============================================================
 * POST - Create a new task
 * ============================================================
 *
 * Demonstrates:
 * - req.body
 * - ID generation
 *
 * URL:
 * POST http://localhost:3000/tasks
 *
 * Example JSON body:
 *
 * {
 *     "title": "Learn Node.js"
 * }
 */

app.post('/tasks', (req, res) => {
     const newTask = {
        // If user provides an ID, use it.
        // Otherwise generate ID using array length + 1.
        id: req.body.id || tasks.length + 1,
        title: req.body.title
    };
    // Add the new task to the array
    tasks.push(newTask);
    // 201 = Resource successfully created
    res.status(201).json(newTask);
});
/**
 * ============================================================
 * PUT - Update a task
 * ============================================================
 *
 * Demonstrates:
 * - Path parameters
 * - req.params
 * - Finding an object in an array
 *
 * URL:
 * PUT http://localhost:3000/tasks/1
 *
 * Example JSON body:
 *
 * {
 *     "title": "Learn Advanced Express"
 * }
 */
app.put('/tasks/:id', (req, res) => {
    // Get ID from URL
    const id = parseInt(req.params.id);
    // Find the task with the given ID
    const task = tasks.find(t => t.id === id);
    if (task) {
        // Update the title
         task.title = req.body.title;
        res.json({
            message: "Task updated successfully",
            task: task
        });
    } else {
        // Task was not found
        res.status(404).json({
            error: "Task not found"
        });
    }
});
/**
 * ============================================================
 * DELETE - Remove a task
 * ============================================================
 *
 * Demonstrates:
 * - Dynamic URL
 * - req.params
 * - filter()
 *
 * URL:
 * DELETE http://localhost:3000/tasks/1
 */
app.delete('/tasks/:id', (req, res) => {
    // Get ID from URL
    const id = parseInt(req.params.id);
    // Remove the task with matching ID
    tasks = tasks.filter(t => t.id !== id);
    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});
/**
 * ============================================================
 * START SERVER
 * ============================================================
 */

app.listen(PORT, () => {
    console.log("----------------------------------------");
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    console.log("----------------------------------------");

});
