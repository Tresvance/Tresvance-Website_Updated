import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const faqData = [
  { keywords: ["services"], reply: "We provide software development, web apps, and AI solutions." },
  { keywords: ["pricing", "cost"], reply: "Pricing depends on the project scope. Contact us for a quote." },
  { keywords: ["contact"], reply: "Email: support@tresvance.com | Phone: +91-XXXXXXXXXX" },
];



function Chatbot() {
  const messagesEndRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to Tresvance.I’m here to help you with our services, pricing, or contact details. "
    }
  ]);

  // Auto open chat after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Bot typing delay
    setTimeout(() => {
      const botMsg = { sender: "bot", text: getBotReply(input) };
      setMessages(prev => [...prev, botMsg]);
    }, 700);
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("help")) {
      return "You can ask about our services, pricing, contact details, or location.";
    }

    for (let item of faqData) {
      if (item.keywords.some(keyword => msg.includes(keyword))) {
        return item.reply;
      }
    }

    return "I’m not sure about that. Please contact our support team.";
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        Chat
      </div>

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">Tresvance Assistant</div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
              
            ))}
            <div ref={messagesEndRef} />

          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
