const express = require("express");
const {
  getAllWorkouts,
  getWokoutById,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require("../../controllers/workoutController.js");

const {
  getRecordForWorkoutId,
} = require("../../controllers/recordController.js");

const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:workoutId", getWokoutById);

router.get("/:workoutId/records", getRecordForWorkoutId);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

module.exports = router;
