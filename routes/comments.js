const express= require('express');
const router= express.Router();
const Comment= require('../commentsModel');

//POST: CREATE A NEW COMMENT
router.post('/', (req, res)=> {
    comment= new Comment({
        commentbody:req.body.commentBody,
        commenttype:req.body.commentType
    });
    comment.save().then(comment=> {
        res.send(comment);
    }).catch(error=> {
        res.status(500).send("Comment was not stored")
    });
});

module.exports= router;