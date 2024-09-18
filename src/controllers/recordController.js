const recordService = require("../services/recordService.js");

const getRecordForWorkoutId = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId)
    return res
      .status(200)
      .send({ status: "FAILED", data: { error: `Parameter: Id is missing` } });

  try {
    const record = recordService.getRecordForWorkoutId(workoutId);
    res.status(200).send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { getRecordForWorkoutId };
