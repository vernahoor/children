const express = require("express");
const connectDB = require("./config/db.js");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "config/config.env" });
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static("client/build"));
//db
connectDB();

//routes
app.use("/api/city", require("./routes/cityRoute"));
app.use("/api/region", require("./routes/regionRoute"));
app.use("/api/hospital", require("./routes/hosbitalRoute"));
app.use("/api/education", require("./routes/educationRoute"));
app.use(
  "/api/population/area",
  require("./routes/populations/populationRoute")
);
app.use(
  "/api/population/middle",
  require("./routes/populations/populationMiddleYear")
);
app.use("/api/population/age", require("./routes/populations/ageGroupRoute"));
app.use(
  "/api/population/total",
  require("./routes/populations/totalPopulationRoute")
);
app.use(
  "/api/population/totalAge",
  require("./routes/populations/totalAgesRoute")
);
//build

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running");
});
