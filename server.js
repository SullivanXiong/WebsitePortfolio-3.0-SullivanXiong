/** Modules. */
const express = require("express");
const session = require("express-session")
const Joi = require("Joi");
const path = require('path');
const fs = require('fs');
const startupDebugger = require('debug')('app:startup');
const databaseDebugger = require('debug')('app:database');

const TWO_HOURS = 1000 * 60 * 60 * 2

/** Constants */
const {
    PORT = 8010,
    NODE_ENV = 'development',

    SESS_NAME = 'sessID',
    SESS_LIFETIME = TWO_HOURS,
    SESS_SECRET = 'a secret session ID'
} = process.env

/** Initialize the express framework as app. */
const app = express();
const liveVideoSession = require('./routes/liveVideoSession')

/** Middleware -> functions have access to request and response object. */
/** Middleware is basically what express initializes prior to the requests. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/view'));
app.use('/', liveVideoSession);

/** Set the environment via console, set NODE_ENV=___ */
console.log(`NODE_ENV=${NODE_ENV}`);
if (app.get('env') === 'production') {
    console.log('Environment: Production Mode');
    IN_PROD = true;
    // app.use();
    // console.log('');
} else if (app.get('env') === 'development') {
    console.log('Environment: Development Mode');
    IN_PROD = false;
} else {
    console.log(`Using default environment...
                 Environment: Development Mode`)
    IN_PROD = false;
}

app.use(session({
    name : SESS_NAME,
    resave: false,
    saveUninitialized : false,
    secret : SESS_SECRET,
    cookie : {
        maxAge : SESS_LIFETIME,
        sameSite : true,
        secure : IN_PROD
    }
}));

/** PORT (acquires a dynamic port or use default 8010) */
/** To set a port: LinuxTerminal (export PORT=____), Windows (set PORT=____) */

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
startupDebugger('Initializing WebsitePortfolio-3.0-SullivanXiong RestAPI...')
databaseDebugger('Connecting to the database...');

/** Body */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/aboutMe', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/aboutMe.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/coms101E-Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/coms101E-Portfolio.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/eng134E-Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/eng134E-Portfolio.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/freeWrites', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/freeWrites.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/peerReview', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/peerReview.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/personalProjects', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/personalProjects.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/prewriteWorksheets', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/prewriteWorksheets.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/resume.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/robinhood/robinhood', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/robinhood/robinhood.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/createSession', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/createSession.html'));
    console.log(`User Connected at ${req.url}...`);
});

app.get('/liveVideoSession', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/liveVideoSession.html'));
    console.log(`User Connected at ${req.url}...`);
});