const Project = require('../../models/project');


module.exports = {
    create,
    index,
    getAllProjects,
  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  console.log("create function reached");
  try{
    const user = req.user;
    const project = req.body.projectName;
    console.log(project);
    const createdProject = await Project.create(req.body);
    console.log(createdProject);
    res.json(createdProject);
  }  catch(err) {
    res.status(400).json(err);
    } 
}

async function index(req, res) {
  try{
    const allProjects = await Project.find({user:req.user._id});
    res.json(allProjects)
  }  catch(err) {
    res.status(400).json(err);
    } 
}

async function getAllProjects(req, res) {
  try{
    const allProjects = await Project.find({});
    res.json(allProjects)
  }  catch(err) {
    res.status(400).json(err);
    } 
}
