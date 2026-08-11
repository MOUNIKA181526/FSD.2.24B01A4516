const express = require('express');
const app = express();

app.use(express.json());

app.put('/student/:id', (req, res) => {
    res.json({
        message: `Student ${req.params.id} Updated`,
        updatedData: req.body
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});