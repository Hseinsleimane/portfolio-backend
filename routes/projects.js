const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/auth');
const {
    createProject,
    getProjectById,
    getAllProjects,
    updateProject,
    deleteProject
} = require('../controllers/projects');

// Apply authentication middleware to all routes
router.use(authenticateToken);

router.post('/create', createProject);
router.get('/getAll', getAllProjects);
router.get('/getById/:id', getProjectById);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

module.exports = router;
