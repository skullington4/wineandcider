const Project = require('../../models/project');


module.exports = {
    create,
    index,
    getAllProjects,
    getAProject
  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  console.log("create function reached");
  try{
    const user = req.user;
    const project = req.body.name;
    const description = req.body.description;
    console.log(user);
  
    const createdProject = await Project.create({project, description, user: user._id});
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

async function getAProject(req, res) {
  try{
    const project = await Project.findById(req.params.id);
    res.json(project)
  }  catch(err) {
    res.status(400).json(err);
    } 
}
