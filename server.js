/** Modules. */
const express = require("express");
const session = require("express-session")
const Joi = require("Joi");
const path = require('path');
const fs = require('fs');
const startupDebugger = require('debug')('app:startup');
const databaseDebugger = require('debug')('app:database');

/** Initialize the express framework as app. */
const app = express();

/** Middleware -> functions have access to request and response object. */
/** Middleware is basically what express initializes prior to the requests. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/styles', express.static('styles'));
app.use('/javascript', express.static('javascript'));
app.use('/assets', express.static('assets'));
app.use('/robinhood', express.static('robinhood'));

/** Set the environment via console, set NODE_ENV=___ */
console.log(`NODE_ENV=${process.env.NODE_ENV}`);
if (app.get('env') === 'production') {
    console.log('Environment: Production Mode');
    // app.use();
    // console.log('');
} else if (app.get('env') === 'development') {
    console.log('Environment: Development Mode');
} else {
    console.log(`Using default environment...
                 Environment: Development Mode`)
}

startupDebugger('Initializing WebsitePortfolio-3.0-SullivanXiong RestAPI...')
databaseDebugger('Connecting to the database...');

/** Body */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log('User Connected...');
});

app.get('/aboutMe', (req, res) => {
    res.sendFile(path.join(__dirname, '/aboutMe.html'))
});

app.get('/coms101E-Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'coms101E-Portfolio.html'))
});

app.get('/eng134E-Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'eng134E-Portfolio.html'));
});

app.get('/freeWrites', (req, res) => {
    res.sendFile(path.join(__dirname, 'freeWrites.html'))
});

app.get('/peerReview', (req, res) => {
    res.sendFile(path.join(__dirname, 'peerReview.html'))
});

app.get('/personalProjects', (req, res) => {
    res.sendFile(path.join(__dirname, 'personalProjects.html'))
});

app.get('/prewriteWorksheets', (req, res) => {
    res.sendFile(path.join(__dirname, 'prewriteWorksheets.html'))
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'resume.html'))
});

app.get('/robinhood', (req, res) => {
    res.sendFile(path.join(__dirname, '/robinhood/robinhood.html'))
});

app.get('/createSession', (req, res) => {
    res.sendFile(path.join(__dirname, 'createSession.html'))
});

app.get('/liveVideoSession', (req, res) => {
    res.sendFile(path.join(__dirname, 'liveVideoSession.html'))
});

/** PORT (acquires a dynamic port or use default 8010) */
/** To set a port: LinuxTerminal (export PORT=____), Windows (set PORT=____) */
const port = process.env.PORT || 8010;

app.listen(port, () => console.log(`Listening on port ${port}...`));