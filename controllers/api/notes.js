const Note = require('../../models/note');


module.exports = {
    create,
    index,
    getAllNotes,
    deleteNote,
    getNote,
    updateNote
  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  console.log("req.body");
  try{
    req.body.from = req.user._id;
    const createdNote = await Note.create(req.body);
    res.json(createdNote);
  }  catch(err) {
    res.status(400).json(err);
    } 
}

async function index(req, res) {
  try{
    const allNotes = await Note.find({$or:[{user:req.user._id, from:req.params.userId}, {from:req.user._id, user:req.params.userId} ]});
    res.json(allNotes)
  }  catch(err) {
    res.status(400).json(err);
    } 
}

async function getNote(req, res) {
  try{
    const note = await Note.findById(req.params.id);
    res.json(note)
  }  catch(err) {
    res.status(400).json(err);
  } 
}

async function updateNote(req, res) {
  try{
    const updatedNote = await Note.findByIdAndUpdate(req.body._id, { $set: {
      text: req.body.text
    }}, { new: true });
    res.json(updatedNote)
  }  catch(err) {
    res.status(400).json(err);
  } 
}

async function getAllNotes(req, res) {
  try{
    const allNotes = await Note.find({});
    res.json(allNotes)
  }  catch(err) {
    res.status(400).json(err);
    } 
}


async function deleteNote(req, res) {
  try{
    const aNote = await Note.findByIdAndDelete(req.params.id);
    console.log(aNote)
    res.json(aNote)
  }  catch(err) {
    res.status(400).json(err);
    } 
}