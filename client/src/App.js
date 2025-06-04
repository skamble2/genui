import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [blocks, setBlocks] = useState([]);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/generate-layout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setBlocks(data.layout || []);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">GenUI: AI Layout Designer</h1>
      <input
        className="w-full p-2 border rounded"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your layout (e.g., 2-column with navbar)"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>

      <div className="grid gap-4 mt-6">
        {blocks.map((block, idx) => (
          <div key={idx} className="border p-4 bg-gray-50 rounded">
            {block.type === "text" && <p>{block.content}</p>}
            {block.type === "button" && <button className="btn">{block.content}</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
