/** Modules. */
const express = require("express");
const session = require("express-session")
const Joi = require("Joi");
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.use('/styles', express.static('styles'));
router.use('/javascript', express.static('javascript'));
router.use('/assets', express.static('assets'));
router.use('/robinhood', express.static('robinhood'));
router.use('/routes', express.static('routes'));

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log(`User ${socket.id} made socket connection.`)
    socket.on('watch', (data) => {
        console.log(`User ${data.user} sent video: ${data.videoId}`)
        socket.broadcast.emit('video', data.videoId);
    });
    socket.on('stateChange', (data) => {
        console.log(`User ${data.user} changed the state to ${data.state}`)
        socket.broadcast.emit('stateChange', {state: data.state})
    });
});

module.exports = router;