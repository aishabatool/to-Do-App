/**
 * Created by 786 computers on 3/8/2015.
 */

var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var ToDo     = mongoose.model( 'toDo' );

exports.toDoController = exports.toDoController || {};

exports.toDoController.addTask = function (req, res, next) {
    var toDo = new ToDo();
    toDo.task = req.body.content;
    toDo.Status = "Pending";

    toDo.save( function( err, todo, count ){
        res.redirect( '/' );
    });
};

exports.toDoController.showTasks = function(req, res, next) {
    ToDo.find(function (err, toDoList, count) {
        res.render('toDoList', {
            toDoList: toDoList
        });
    });
};

exports.toDoController.deleteTask = function(req, res, next){
    ToDo.findById(req.params.deleteID, function ( err, toDoTask ){
        toDoTask.remove( function ( err, toDoTask ){
            res.redirect( '/' );
        });
    });
};

exports.toDoController.updateTask = function(req, res, next){

    console.log("fdfd");

    ToDo.findById( req.params.updateID , function ( err, toDoTask ){

        console.log("here");

        toDoTask.task = req.params.updateText;
        toDoTask.save( function ( err, todo, count ){
            res.redirect( '/' );
        });
    });
};