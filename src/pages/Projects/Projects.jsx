import { useState } from 'react';
import * as projectService from '../../utilities/projects-service';
import { useEffect } from 'react';


export default function Projects({}) {

  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const [placeholder, setPlaceholder] = useState("Project Name");


  useEffect(() => {
    async function getProjects() {
      const projects = await projectService.getAllProjects();
      console.log(projects);
    }
    getProjects();
  }, []);

  
  const handleChange = (e) => {
    setProjectName(e.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Project Name: " + projectName);

    const newProject = await projectService.createProject({name: projectName});
    console.log(newProject);
  }

  return (
    <main>
      <h1>Projects Page</h1>
      <div className="blank">
        <h2>Temp holding area for Project</h2>
        <p>Project Name: {projectName} this will contain the project name
          Hopefully in time selecting a project will load that instance with all appplicable notes
        </p>
        <select>
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
          <option value="project3">Project 3</option>
        </select>
        <form action='' onSubmit={handleSubmit}>
          <input type="text" name='text' id='text' placeholder="Project Name" onChange={handleChange} value={projectName}></input>
          <button type="submit">Add Project</button>
        </form>
      </div>

      <div className="blank">
        <div>This will hold existing projects</div>
      </div>
    </main>
  );
}