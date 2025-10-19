import express from "express";
import mongoose from "mongoose";

//* server instance
const app = express();

//* port configuration
const PORT = 8080;

//* importing routes
import userRoutes from "./routes/users.route.js";

// * mongoose connection
mongoose
  .connect("mongodb:// localhost:27017/new_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//* using routes
app.use("/api/users", userRoutes);

// *using express json middlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
