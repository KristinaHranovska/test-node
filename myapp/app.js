const express = require('express');
const app = express();

app.get('/con?tact', (req, res) => {
    res.send('<h1>Contact page!</h1>');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
