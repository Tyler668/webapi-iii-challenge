const express = require('express');
const Users = require('./userDb.js');
const Posts = require('../posts/postDb');
const router = express.Router();

router.post('/', (req, res) => {
    const newUser = req.body;

    Users.insert(newUser)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "The user's information could not be posted."
            });
        });
});

router.post('/:id/posts', (req, res) => {
    Posts.insert(req.body)
        .then(posts => {
            if (!posts) {
                res.status(404).json({ Error: "The user with the specified ID was not found" })
            }

            res.status(200).json(posts);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "The user's information could not be posted."
            });
        });
});

router.get('/', (req, res) => {
    Users.get(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "The users information could not be retrieved."
            });
        });
});

router.get('/:id', (req, res) => {
    Users.getById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({ Error: "The user with the specified ID was not found" })
            }
            res.status(200).json(user);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "The users information could not be retrieved."
            });
        });
});

router.get('/:id/posts', (req, res) => {
    Users.getUserPosts(req.params.id)
        .then(posts => {
            if (!posts) {
                res.status(404).json({ Error: "The user with the specified ID was not found" })
            }
            res.status(200).json(posts);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                error: "The user's posts could not be retrieved."
            });
        });
});

router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(user => {
        if (!user) {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
            res.status(200).json({ message: 'RIP user' });
    })
    .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
            message: 'Error removing the user',
        });
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    if (!changes.name) {
        res.status(400).json({ errorMessage: "Please provide a name for the user" });
    }

    Users.update(req.params.id, changes)
        .then(post => {
            if (!post) {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
            else {
                res.status(200).json(post);
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error updating the user',
            });
        });
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
