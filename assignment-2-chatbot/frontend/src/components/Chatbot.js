import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return;
    setResponse("Thinking...");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/ask", 
        { question },
        { 
          headers: { 
            "Content-Type": "application/json"
          },
          withCredentials: false // ✅ Ensure credentials are not blocking the request
        }
      );
      setResponse(res.data.answer);
    } catch (error) {
      console.error("Frontend API Error:", error.response || error); // ✅ Log errors
      setResponse("Error fetching response.");
    }

    setLoading(false);
  };

  return (
    <div className="chatbot">
      <input
        type="text"
        placeholder="Ask a CDP question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askQuestion} disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>
      <p className="response">{response}</p>
    </div>
  );
};

export default Chatbot;
