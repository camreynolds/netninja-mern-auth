const Workout = require('../models/workoutsModel');
const mongoose = require('mongoose');

// get all the workouts
const getWorkouts = async (req,res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

// get a single workout
const getWorkout = async (req,res) => {
    const {id} = req.params;

    // this is used to handle the error. It verifys if the id is a valid.
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    };

    res.status(200).json(workout);

};

// create a new workout
const createWorkout = async (req, res) => {
    const{title,reps,load} = req.body;
    
    // add a new doc to database
    try {
        const workout = await Workout.create({title,reps,load});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

// delete a single workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
    };

    const workout = await Workout.findOneAndDelete({_id:id});

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    };

    res.status(200).json(workout);
};

// update a single workout
const updateWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'});
    };

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });

    if(!workout){
        return res.status(400).json({error: 'No such workout'});
    };

    res.status(200).json(workout);
};



module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
};