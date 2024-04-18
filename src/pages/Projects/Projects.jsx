import { useState } from 'react';
import * as projectService from '../../utilities/projects-service';
import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';



export default function Projects({}) {

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    async function getProjects() {
      const projects = await projectService.getAllProjects();
      console.log(projects);
      setProjects(projects);
    }
    getProjects();
  }, []);

  
  const handleChange = (e) => {
    setProjectName(e.target.value);
  }

  const handleDescription = (e) => {
    setProjectDescription(e.target.value);
  }

  async function handleSubmit(evt) {
    // evt.preventDefault();
    const newProject = await projectService.createProject({name: projectName, description: projectDescription});
    console.log(newProject);
  }

  const handleProjectClick = (project) => {
    console.log(project);
  }

  return (
    <main>
      <h1>Projects Page</h1>
      <div className="blank">
        <form action='' onSubmit={handleSubmit}>
          <input className='projectNameInput' type="text" name='text' id='text' placeholder="Project Name" onChange={handleChange} value={projectName}></input>
          <input className='projectNameDesc' type="text" name='text' id='text' placeholder="Short description" onChange={handleDescription} value={projectDescription}></input>
          <button className='projectButton' type="submit">Add Project</button>
        </form>
      </div>

      <div className='projectHolder'>
        {projects.map((project) => (
          <div className='singleProject' key={project.id}>
                <Link to={`/project/${project._id}`}>
              <h3>{project.project}</h3>
            <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}