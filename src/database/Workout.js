const DB = require("./db.json");
const { saveToDatabase } = require("./utils.js");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const getOneWorkout = (id) => {
  const workout = DB.workouts.find((workout) => workout.id === id);

  if (!workout)
    throw {
      status: 500,
      message: `Workout with id '${workoutId}' not exists`,
    };
  try {
    return workout;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(
    (workout) => workout.name === newWorkout.name
  );

  if (isAlreadyAdded !== -1)
    throw {
      status: 500,
      message: `Workout with name '${newWorkout.name}' already exists`,
    };

  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdated = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForUpdated === -1)
    throw {
      status: 500,
      message: `Workout with id '${workoutId}' not exists`,
    };

  const updatedWorkout = {
    ...DB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString(),
  };

  try {
    DB.workouts[indexForUpdated] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeleted = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForDeleted === -1)
    throw {
      status: 500,
      message: `Workout with id '${workoutId}' not exists`,
    };

  try {
    DB.workouts.splice(indexForDeleted, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
