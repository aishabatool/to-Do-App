var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var toDo     = mongoose.model('toDo');

var toDoController = require("../controllers/toDoController");

/* GET home page. */
router.get('/', toDoController.toDoController.showTasks);

router.post('/addTask', toDoController.toDoController.addTask);

router.get('/deleteTask/:deleteID', toDoController.toDoController.deleteTask);

router.get('/updateTask/:updateID/:updateText', toDoController.toDoController.updateTask);

module.exports = router;