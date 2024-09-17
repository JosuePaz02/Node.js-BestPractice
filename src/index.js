const express = require("express");
const v1WorkoutRoutes = require("./v1/routes/workout.routes.js");

const app = express();

app.use(express.json());
app.use("/api/v1", v1WorkoutRoutes);
console.log("hOLAAAA")

app.listen(3000, () => {
  console.log(`🚀 Server on port ${3000}`);
});
