const express = require('express');
const app = express();

// Custom Middleware
app.use((req, res, next) => {
    console.log(
        `${req.method} request received for ${req.url}`
    );
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Express Middleware Demo');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});