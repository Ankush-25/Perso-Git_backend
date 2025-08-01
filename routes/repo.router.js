const express = require('express');
const repoController = require('../controllers/repoController');
const repoRouter = express.Router();

repoRouter.post("/repo/creation", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepository);
repoRouter.get("/repo/:ID", repoController.fetchRepositoryById);
repoRouter.get("/repoName/:name", repoController.fetchRepositoryByName);
repoRouter.get("/repo/Current/:ID", repoController.fetchRepositoryLogedInUser);
repoRouter.put("/updateRepo/:ID", repoController.updateRepositoryById);
repoRouter.post("/repo/toggle/:ID", repoController.toggleRepositoryVisiblityById);
repoRouter.delete("/deleteRepo/:ID", repoController.deleteRepository);

module.exports = repoRouter;  