/** Modules. */
const express = require("express");
const session = require("express-session")
const Joi = require("Joi");
const path = require('path');
const fs = require('fs');
const sha256 = require('sha256');

const router = express.Router();

router.use(path.join(__dirname, '../view/styles'), express.static('styles'));
router.use(path.join(__dirname, '../view/javascript'), express.static('javascript'));
router.use(path.join(__dirname, '../view/assets'), express.static('assets'));
router.use(path.join(__dirname, '../view/robinhood'), express.static('robinhood'));
router.use(path.join(__dirname, '../view/routes'), express.static('routes'));

// Opening the json file for access
const liveVideoSessionJSON = JSON.parse(fs.readFileSync(path.join(__dirname, "../database/liveVideoSession.json"), (err) => {
    if (err)
        console.log("Unable to open liveVideoSession.json ...")
        console.log(err)
}));

var sessions = liveVideoSessionJSON.videoSessions;

router.get('/createSession', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/createSession.html'));
    console.log(`User Connected at ${req.url}...`);
});

router.post('/createSession', (req, res) => {
    const schema = Joi.object().keys({
        sessionTitle: Joi.string(),
        name: Joi.string().max(15).required(),
        sessionUserLimit: Joi.number().min(2).required()
    });
    Joi.validate(req.body, schema, (err, data) => {
        if (err) {
            console.log("Invalid submission of data.");
            console.log(err);
        }
        else {
            console.log("Successfully submitted data...");
            console.log(data);
            console.log("Creating session...");
            console.log("Generating uid...");
            hash = sha256((req.body.sessionTitle + req.body.name + sessions.length.toString() + req.body.sessionUserLimit.toString()));
            var recurHash = (hash) => {
                for (var i = 0; i < sessions.length; i++) {
                    if (hash == sessions[i].uniqueID)
                        return recurHash(sha256(hash));
                }
                return hash
            }
            var uidhash = recurHash(hash);
            console.log(`UID Generated: ${uidhash}...`);
            const creationID = sessions.length;
            const title = req.body.sessionTitle;
            const adminName = req.body.name;
            const sessionData = {
                "creationID": creationID,
                "status": "live",
                "title": title,
                "uniqueID": uidhash,
                "admin": adminName,
                "sessionUserLimit": req.body.sessionUserLimit,
                "liveUsers": [
                    adminName
                ],
                "logs": {
                    "usersLog": [
                        adminName
                    ],
                    "videosLog": [
                        
                    ],
                    "chatLog": [
                        
                    ]
                }
            }
            sessions.push(sessionData);
            fs.writeFile(path.join(__dirname, "../database/liveVideoSession.json"), JSON.stringify(liveVideoSessionJSON, null, 2), (err, data) => {
                if (err)
                   return res.send(err);
                console.log(`Successfully registered new session ${title}.`);
            });
            res.redirect(`/liveVideoSession/${uidhash}?t=${title}&a=${adminName}&creationid=${creationID}`);
        }
    })
});

module.exports = router;