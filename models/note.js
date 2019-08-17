const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  title: {type: String, required: true},
  date: Date,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required :true
  },
  tags:String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;