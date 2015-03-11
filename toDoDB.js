/**
 * Created by 786 computers on 3/8/2015.
 */

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var toDo = new Schema({
    task    : String
});

mongoose.model('toDo', toDo);
mongoose.connect('mongodb://aisha:allah1@dbh56.mongolab.com:27567/todolist');