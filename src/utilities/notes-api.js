import sendRequest from "./send-request";
const BASE_URL = process.env.REACT_APP_API_URL + '/api/notes';

export async function createNoteRequest(noteData) {
  console.log("made it to notes-api.js" + noteData);
  return await sendRequest(BASE_URL, 'POST', noteData);
}

export async function getNotesRequest(userId) {
  return await sendRequest(BASE_URL + `/users/${userId}`, 'GET');
}

export async function deleteNoteRequest(id) {
  return await sendRequest(BASE_URL + `/${id}`, 'DELETE');
}

export async function getANote(id) {
  return await sendRequest(BASE_URL + `/${id}`, 'GET');
}

export async function update(noteObject) {
  return await sendRequest(`${BASE_URL}/update`, 'PUT', noteObject);
}