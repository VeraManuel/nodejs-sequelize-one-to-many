'use strict'

var db = require('../models');
var Tutorial = db.tutorials;
var Comment = db.comments;

exports.createTutorial = (tutorial) => {
    return Tutorial.create({
        title: tutorial.title,
        description: tutorial.description
    })
        .then((tutorial) => {
            console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
            return tutorial
        })
        .catch((err) => {
            console.log(">> Error while creating tutorial: ", err);
        });
};

exports.createComment = (tutorialId, comment) => {
    return Comment.create({
        name: comment.name,
        text: comment.text,
        tutorialId: tutorialId
    })
        .then((comment) => {
            console.log(">> Created Comment: " + JSON.stringify(comment, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
        });
};

exports.findTutorialById = (tutorialId) => {
    return Tutorial.findByPk(tutorialId, { include: ["comments"] })
        .then((tutorial) => {
            return tutorial;
        })
        .catch((err) => {
            console.log(">> Error while finding the tutorials: ", err);
        });
};

exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["tutorials"] })
        .then((comment) => {
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while finding the comment: ", err);
        });
};

exports.findAll = () => {
    return Tutorial.findAll({
        include: ["comments"],
    }).then((tutorials) => {
        return tutorials;
    });
};


