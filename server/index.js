const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/generate-layout", (req, res) => {
  const { prompt } = req.body;

  // Placeholder logic (to be replaced with OpenAI API later)
  const layout = [
    { type: "text", content: `You said: ${prompt}` },
    { type: "button", content: "Click Me" },
  ];

  res.json({ layout });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
