import "./chatbot.css";
import Header from "./header.jsx";
import ChatBox from "./chatbox.jsx";
import ChatInput from "./chatinput.jsx";

function Chatbot() {
  return (
    <div className="chatbot">
      <Header />
      <div className="container">
        <ChatBox />
        <ChatInput />
      </div>
    </div>
  );
}

export default Chatbot;
