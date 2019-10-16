const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

const Todo = require('../models/Todo');
const auth = require('../middlewares/auth');


// @route    GET api/v1/todo/get-tasks
// @desc     Get tasks
// @access   Private
router.get('/get-tasks', auth, async (req, res) => {


});

// @route    POST api/v1/todo/create-task
// @desc     Create task
// @access   Private
router.post('/create-task', auth, async (req, res) => {

  

});

// @route    PUT api/v1/todo/update-task/:id
// @desc     Update task
// @access   Private
router.put('/update-task/:id', auth, async (req, res) => {


});

// @route    DELETE api/v1/todo/delete-task/:id
// @desc     delete task
// @access   Private
router.delete('/delete-task/:id', auth, async (req, res) => {
    
});

module.exports = router;