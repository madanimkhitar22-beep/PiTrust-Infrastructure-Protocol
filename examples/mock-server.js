/**
 * PiTrust Mock Server Example
 * Provides a minimal local API to simulate trust verification flow.
 * Run with: node examples/mock-server.js
 */

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

// Simulated in-memory trust data
const trustScores = {
  "user_001": { score: 96, level: "verified" },
  "user_002": { score: 78, level: "moderate" },
  "user_003": { score: 45, level: "low" },
};

// Base route
app.get("/", (req, res) => {
  res.json({
    service: "PiTrust Mock API",
    status: "Running",
    endpoints: ["/trust/verify/:id"],
  });
});

// Verify trust endpoint
app.get("/trust/verify/:id", (req, res) => {
  const id = req.params.id;
  const result = trustScores[id];
  if (!result) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({
    id,
    ...result,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`✅ PiTrust Mock Server running on http://localhost:${PORT}`);
});
