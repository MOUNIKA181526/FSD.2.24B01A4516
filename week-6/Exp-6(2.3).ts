const express = require('express');
const app = express();

app.delete('/student/:id', (req, res) => {
    res.json({
        message: `Student ${req.params.id} Deleted Successfully`
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});