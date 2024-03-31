import * as notesAPI from './notes-api';

export async function getAllNotes(id) {
  const allNote = await notesAPI.getNotesRequest(id);
  return allNote;
}

export async function createNote(noteData) {
    console.log("made it to notes-service.js" + noteData);
    const newNote = await notesAPI.createNoteRequest(noteData);
    return newNote;
  }

  export async function deleteNote(noteId) {
    const deleteNote = await notesAPI.deleteNoteRequest(noteId);
    return deleteNote;
  }

  export async function getSingleNote(id) {
    return await notesAPI.getANote(id);
  }

  export async function updateNote(noteObject) {
    return await notesAPI.update(noteObject);
  }