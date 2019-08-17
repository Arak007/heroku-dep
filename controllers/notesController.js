const Note = require('../models/note');


/**
 * router.get(notes, NotesController.index);
router.get(`/notes/new`, NotesController.new);
router.get(`/notes/:id`, NotesController.show);
router.post(`/notes/`, NotesController.create);
 */


exports.index = (req,res) => {
    
    
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(404).send(err));
};




exports.show = (req,res) => {
    Note.findOne({
        _id: req.params.id,
        
    })
    .then(note =>res.json(note))
    .catch(err => res.status(404).json(err));
};


exports.create = (req,res) => {
    if (!req.isAuthenticated())
        return res.status(404).send({ error: "Not authenticated" });
    console.log(`${JSON.stringify(req.body.author)}`)
    req.body.author = req.session.userId
    
    Note.create({

        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        content: req.body.content,
        tags: req.body.tags,
    })    
    .then(() => res.status(200).send({success: "Note created!"}))
    .catch(err => res.status(404).send(err));
};
        
exports.edit = (req,res) => {
    if (!req.isAuthenticated())
        return res.status(404).send({ error: "Not authenticated" });
    Note.findOne({
        _id: req.params.id,
        author:req.session.userId
    })
    .then(note => res.send(note))
    .catch(err => res.status(404).send(err));
};

exports.update = (req,res) => {
    if (!req.isAuthenticated())
        return res.status(404).send({ error: "Not authenticated" });
    Note.updateOne({
        id: req.body.id,
        author: req.session.userId,
        title: req.body.title,
        //author: req.body.author,
        date: req.body.date,
        content: req.body.content,
        tags: req.body.tags,
    })
    .then(() => res.status(200).send({sucess: "Note updated"}))
    .catch(err => res.status(404).send(err));
};

exports.destroy = (req,res) => {
    if (!req.isAuthenticated())
        return res.status(404).send({ error: "Not authenticated" });
    Note.deleteOne({
        _id: req.body.id,
        author: req.session.userId
    })
    .then(() => res.status(200).send({success: "Note deleted"}))
    .catch(err => res.json(err));
};


