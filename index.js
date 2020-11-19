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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
        done(err, user);
    });
});


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        console.log(email, password);
        
        User.findOne({ email: email }, (err, user) => {
            console.log(user);
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

mongoose.connect(process.env.mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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



app.post('/login', passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
}))

app.get('/loginSuccess', (req, res) => {
    res.status(200);
    res.send({status: "login okay"});
});

app.get('/loginFailure', (req, res) => {
    res.status(200);
    res.send({status: "login not okay"});
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