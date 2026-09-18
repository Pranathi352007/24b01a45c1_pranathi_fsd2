const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// ==========================================
// EJS CONFIGURATION
// ==========================================

app.set('view engine', 'ejs');


// ==========================================
// MONGODB ATLAS CONNECTION
// ==========================================

const dbURI =
    "mongodb+srv://<24b01a45c1_db_username>:ppX5kv6ibINainSD@cluster0.r72ubev.mongodb.net/LabDB?appName=Cluster0";

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });


// ==========================================
// SCHEMA
// ==========================================

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },

    course: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    }

});


// ==========================================
// MODEL
// ==========================================

const Student = mongoose.model(
    'Student',
    studentSchema
);


// ==========================================
// HOME ROUTE
// GET /
//
// Fetch students and render EJS page
// ==========================================

app.get('/', async (req, res) => {

    try {

        const students = await Student.find();

        res.render('apphome', {
            students: students
        });

    }
    catch (error) {

        res.status(500).send(
            "Error fetching students: " + error.message
        );

    }

});


// ==========================================
// CREATE
// POST /students
// ==========================================

app.post('/students', async (req, res) => {

    try {

        const newStudent =
            new Student(req.body);

        const savedStudent =
            await newStudent.save();

        res.status(201).json(savedStudent);

    }
    catch (error) {

        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });

    }

});


// ==========================================
// READ
// GET /students
// ==========================================

app.get('/students', async (req, res) => {

    try {

        const students =
            await Student.find();

        res.status(200).json(students);

    }
    catch (error) {

        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });

    }

});


// ==========================================
// UPDATE
// PUT /students/:id
// ==========================================

app.put('/students/:id', async (req, res) => {

    try {

        const updatedStudent =
            await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        if (!updatedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json(updatedStudent);

    }
    catch (error) {

        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });

    }

});


// ==========================================
// DELETE
// DELETE /students/:id
// ==========================================

app.delete('/students/:id', async (req, res) => {

    try {

        const deletedStudent =
            await Student.findByIdAndDelete(
                req.params.id
            );

        if (!deletedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message:
                "Student record deleted successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });

    }

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Server is running at http://localhost:${PORT}`
    );

    console.log(
        "Ready for CRUD operations testing."
    );

});