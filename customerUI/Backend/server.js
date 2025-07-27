const express = require("express"); // ✅ no space here!
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 5000;

const MONGO_URI =
  "mongodb+srv://gopiuppu:Gopiu@batch2411cluster.xa8nb.mongodb.net/CUSTOMERUI?retryWrites=true&w=majority&appName=Batch2411Cluster";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// DB Connection & Server Start
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ MongoDB Error:", err));
