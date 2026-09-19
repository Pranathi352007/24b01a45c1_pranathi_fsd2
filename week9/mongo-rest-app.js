const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// STEP 1 & 2: MongoDB Atlas Connection

const dbURI =
    "mongodb://24b01a45c1_db_user:<db_password>@ac-q9axim9-shard-00-00.r72ubev.mongodb.net:27017,ac-q9axim9-shard-00-01.r72ubev.mongodb.net:27017,ac-q9axim9-shard-00-02.r72ubev.mongodb.net:27017/?ssl=true&replicaSet=atlas-p89wja-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

// STEP 3: Create Schema and Model

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
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

});


// Create Student Model
const Student = mongoose.model(
    "Student",
    studentSchema
);

// STEP 4 & 5: CRUD Operations

// CREATE
// POST /students

app.post('/students', async (req, res) => {

    try {

        const newStudent = new Student(req.body);

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);

    }
    catch (error) {

        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });

    }

});

// READ
// GET /students

app.get('/students', async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json(students);

    }
    catch (error) {

        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });

    }

});

// UPDATE
// PUT /students/:id

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

// DELETE
// DELETE /students/:id

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
            message: "Student record deleted successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });

    }

});

// START EXPRESS SERVER

app.listen(PORT, () => {

    console.log(
        `Server is running at http://localhost:${PORT}`
    );

    console.log(
        "Ready for CRUD operations testing."
    );

});
