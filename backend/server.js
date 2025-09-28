const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


const todoRoutes = require("./routes/todos.js");


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/todos", todoRoutes);


// MongoDB Connection
mongoose.connect(process.env.DBURL, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log("MongoDB connected");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(" MongoDB connection error:", err));