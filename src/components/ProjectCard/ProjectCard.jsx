import { Link } from "react-router-dom";


export default function ProjectCard(project) {  

    console.log("project: " + project);
  return (



<div>
<h1>{project.project}</h1>  // Assuming `project` contains a title or name in the `project` key
<p>{project.description}</p>
</div>
  )
}
