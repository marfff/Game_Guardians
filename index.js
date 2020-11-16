const express = require('express');
const  app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.status(200);
    res.send("Game Guardians Welcome You!");
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.status(200);
        res.send(users);
    })
})

app.post('/users', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(() => {
        res.status(200);
        res.send({'status': 'worked', 'email': req.body.email, 'password': req.body.password});
    })
})

app.listen(5000, () => {
    console.log('Listening on port 5000');
});