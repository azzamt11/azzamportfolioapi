const mongoose= require('mongoose');

//comments schema
const CommentSchema= new mongoose.Schema({
    commentbody: {type:String, required:true, minlength:1, maxlength:1000},
    commenttype: {type:Number, required:true}
});

module.exports= new mongoose.model('Comment', CommentSchema);