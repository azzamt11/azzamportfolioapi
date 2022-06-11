const mongoose= require('mongoose');
const yup = require('yup');

//comments schema
const CommentSchema= new mongoose.Schema({
    commentbody: {type:String, required:true, minlength:1, maxlength:1000},
    commenttype: {type:Number, required:true}
});

const validateComment= comment=> {
    const schema= yup.object().shape({
        commentBody:yup.string().required().min(1).max(1000),
        commentType:yup.number().required().max(1)
    });
    return schema.validate(comment).then(comment=> comment).catch(error => console.log(error));
}

exports.Comment= new mongoose.model('Comment', CommentSchema);
exports.validateComment= validateComment;