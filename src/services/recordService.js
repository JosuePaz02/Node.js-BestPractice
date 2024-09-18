const Record = require("../database/Record.js");

const getRecordForWorkoutId = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = { getRecordForWorkoutId };
