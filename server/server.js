import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello ForgeHub");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "ForgeHub API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});