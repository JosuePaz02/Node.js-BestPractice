const Workout = require("../database/Workout.js");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getWokoutById = (id) => {
  const workout = Workout.getOneWorkout(id);
  console.log(workout);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  const newWorkoutInserted = Workout.createNewWorkout(workoutToInsert);

  return newWorkoutInserted;
};

const updateOneWorkout = (workoutId, changes) => {
  const workoutUpdated = Workout.updateOneWorkout(workoutId, changes);
  return workoutUpdated;
};

const deleteOneWorkout = (id) => {
  Workout.deleteOneWorkout(id);
};

module.exports = {
  getAllWorkouts,
  getWokoutById,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
