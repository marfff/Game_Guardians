const express = require('express');
const  app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');
const Game = require('./models/game');
const bodyParser = require('body-parser');
const game = require('./models/game');
const cors = require('cors');
const { static } = require('express');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);

//app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(expressSession({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true
    }
}));

//app.get
app.get('/', (req, res) => {
    res.status(200);
    res.send("Game Guardians Welcome You!");
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.status(200);
        res.send(users);
    });
});

app.post('/signup', (req, res) => {
    res.status(200);
    if (req.body.password === req.body.verifyPassword){
        new User({
            email: req.body.email,
            password: req.body.password
        }).save((err, obj) => {
            if (err) { //if a password is too short or if there is duplicated emails
                res.status(200);
                res.send({'status': "not okay", 'message': err.message});
            } else{
                res.status(200);
                res.send({'status': 'okay', 'email': req.body.email, 'password': req.body.password});
            }
        })
    } else if (req.body.password !== req.body.verifyPassword) {
        res.status(200);
        res.send({status: "not okay", 'message': "Passwords do not match"});
    }
})

app.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(await User.checkPassword(email, password)) {
        User.findOne({email}, (err, user) => {
            req.session.userID = nanoid();
            req.session.email = user.email
            req.session.save();
            res.status(200).json({status: "login okay", user});
        });
        return;
    }
    res.status(401).json({status: "login not okay"});
})

app.post('/logout', (req, res) => { //resets user id to null - logging them out//
    req.session.userID = null;
    req.session.email = null;
    req.session.save();
    res.status(200).json({status: "User logged out"}) //if !req.session.userID {throw error} {happy times}
})

app.post('/loginCheck', (req, res) => { //checks if a user has an active session//
    res.status(200).json({status: req.session.userID, email: req.session.email})
})

app.post('/users', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(() => {
        res.status(200);
        res.send({'status': 'worked', 'email': req.body.email, 'password': req.body.password});
    });
});

app.get('/game', (req, res) => {
    Game.find({}, (err, games) => {
        res.status(200);
        res.send(games);
    });
});

app.post('/game', (req, res) => {
    const game = new Game ({
        title: req.body.title,
        description: req.body.description,
        pegi: req.body.pegi,
        platform: req.body.platform,
        ageRating: req.body.ageRating,
        educationalValue: req.body.educationalValue,
        easeOfPlay: req.body.easeOfPlay,
        violence: req.body.violence,
        sex: req.body.sex,
        language: req.body.language,
        consumerism: req.body.consumerism,
        substanceUse: req.body.substanceUse
    })
    game.save().then(() => {
        res.status(200);
        res.send({'status':'worked', 
            'title': req.body.title, 
            'description': req.body.description, 
            'pegi': req.body.pegi, 
            'platform': req.body.platform,
            'ageRating': req.body.ageRating,
            'educationalValue': req.body.educationalValue,
            'easeOfPlay': req.body.easeOfPlay,
            'violence': req.body.violence,
            'sex': req.body.sex,
            'language': req.body.language,
            'consumerism': req.body.consumerism,
            'substanceUse': req.body.substanceUse 
        });
    });
});


app.listen(5000, () => {
    console.log('Listening on port 5000');
});