const express = require("express"); // Import express
const mongoose = require("mongoose"); // Import mongoose
const dotenv = require("dotenv"); // Import dotenv
const cors = require("cors"); // Import cors

const authRoutes = require("./routes/authRoutes"); // Import routes

dotenv.config(); // Initialize dotenv to read from .env

const app = express(); // Initialize express app
app.use(cors()); // Enable cors
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Canteen App API!");
});

// Set the port from .env or default to 5002
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
