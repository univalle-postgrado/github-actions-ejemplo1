import express from 'express';
// import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.get('/user', function(req, res) {
//     res.status(201).json({ name: 'john' });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

