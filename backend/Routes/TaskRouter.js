const { createTask, fetchAllTasks,updateTaskById,deleteTaskById} = require('../Controllers/TaskController'); 


const router = require('express').Router();
//to get all tasks
router.get('/',fetchAllTasks);
//create task
router.post('/',createTask);
//update a task
router.put('/:id',updateTaskById);
//delete task
router.delete('/:id',deleteTaskById);



module.exports = router;
