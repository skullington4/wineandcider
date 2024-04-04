const Project = require('../../models/project');


module.exports = {
    create,

  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  console.log("create function reached");
  try{
    const user = req.user;
    const project = req.body.projectName;
    console.log(req.formData);
    const createdProject = await Project.create({name: project, user: user._id});
    console.log(createdProject);
    res.json(createdProject);
  }  catch(err) {
    res.status(400).json(err);
    } 
}
