const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const dbURI ="mongodb://24b01a4516_db_user:u4BcBFusovWf8CsS@ac-bw5zacu-shard-00-00.qemfthg.mongodb.net:27017,ac-bw5zacu-shard-00-01.qemfthg.mongodb.net:27017,ac-bw5zacu-shard-00-02.qemfthg.mongodb.net:27017/?ssl=true&replicaSet=atlas-lmgtjp-shard-0&authSource=admin&appName=Cluster0";
mongoose.connect(dbURI)
    .then(() => console.log("Connected to MongoDB Atlas successfully"))
    .catch((err) => console.error("Database connection error", err));


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

    course: String,

    isActive: {
        type: Boolean,
        default: true
    }
});

const Student = mongoose.model('Student', studentSchema);
// CREATE: Add a new student
app.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);

    } catch (error) {
        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });
    }
});

// READ: Get all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});
// UPDATE: Modify a student's data by ID
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

    } catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });
    }
});

// DELETE: Remove a student by ID
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent =
            await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student record deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});
// HOME ROUTE
// Fetch students and render the EJS page
app.get('/', async (req, res) => {
    try {
        const students = await Student.find();

        res.render('apphome', {
            students: students
        });

    } catch (error) {
        res.status(500).send("Error loading students");
    }
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});