const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
  try {
    const records = DB.records.filter((record) => record.id === workoutId);
    if (!records)
      throw {
        status: 400,
        message: `Can't find workout with id '${workoutId}'`,
      };
    return records;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

module.exports = { getRecordForWorkout };
