const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

const Todo = require('../models/Todo');
const auth = require('../middlewares/auth');


// @route    GET api/v1/todo/get-tasks
// @desc     Get tasks
// @access   Private
router.get('/get-tasks', auth, async (req, res) => {

    try {
        
        // let tasks = await Todo.find({}).populate('createdBy').find({ createdBy: {$in: req.user.id} });
        const tasks = await Todo.find({ createdBy: { $in: req.user.id } }).populate('createdBy', { password: 0 });

        // check tasks if not created by user
        if (tasks.length < 1) {
            return res.json({
                success: true,
                message: "You have not created any task yet!"
            });
        }

        return res.json({
            success: true,
            tasks
        });

    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }

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