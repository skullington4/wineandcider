import * as projectsAPI from './projects-api';

export async function getAllProjects(id) {
  const allProject = await projectsAPI.getProjectsRequest(id);
  return allProject;
}

export async function createProject(projectData) {
    const newProject = await projectsAPI.createProjectRequest(projectData);
    return newProject;
  }

  export async function deleteProject(projectId) {
    const deleteProject = await projectsAPI.deleteProjectRequest(projectId);
    return deleteProject;
  }

  export async function getSingleProject(id) {
    return await projectsAPI.getAProject(id);
  }

  export async function updateProject(projectObject) {
    return await projectsAPI.update(projectObject);
  }