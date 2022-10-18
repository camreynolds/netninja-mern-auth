const { response } = require('express');
const express = require('express');

// controllers
const {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout} = require('../controllers/workoutController');

// middleware
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth);

// GET all the workouts.
router.get('/', getWorkouts);

// GET a single workout.
router.get('/:id', getWorkout);

// POST a new workout.
router.post('/', createWorkout);

// DELETE a single workout.
router.delete('/:id', deleteWorkout)

// UPDATE a single workout.
router.patch('/:id', updateWorkout)




module.exports = router