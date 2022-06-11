const express= require('express');
const router= express.Router();
const {Comment, validateComment}= require('../commentsModel');

//POST: CREATE A NEW COMMENT
router.post('/', async (req, res)=> {
    const message = await validateComment(req.body);
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

//GET:
router.get('/', (req, res)=> {
    Comment.find().then(comments=> res.send(comments)).catch(error=> {res.status(500).send('womething went wrong')});
});

module.exports= router;