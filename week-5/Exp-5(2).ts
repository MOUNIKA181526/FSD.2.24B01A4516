const express = require('express');
const app = express();

// Route Parameter
app.get('/student/:id', (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

// Query Parameter
app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Searching for: ${name}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});