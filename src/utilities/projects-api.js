import sendRequest from "./send-request";
const BASE_URL = process.env.REACT_APP_API_URL + '/api/projects';

export async function createProjectRequest(projectData) {
  console.log("made it to projects-api.js:" + projectData);
  return await sendRequest(BASE_URL, 'POST', projectData);
}

export async function getProjectsRequest(userId) {
  return await sendRequest(BASE_URL + `/users/${userId}`, 'GET');
}

export async function deleteProjectRequest(id) {
  return await sendRequest(BASE_URL + `/${id}`, 'DELETE');
}

export async function getAProject(id) {
  return await sendRequest(BASE_URL + `/${id}`, 'GET');
}

export async function update(projectObject) {
  return await sendRequest(`${BASE_URL}/update`, 'PUT', projectObject);
}