import "./behavioral.css";
// import Chatbot from "../../components/behavioral/chatbot.jsx";
import Header from "../../components/behavioral/header.jsx";
import CTest from "../../components/behavioral/chatbot-test.jsx";

function Behavioral() {
  return (
    <div className="body-container">
      <Header subtitle="Daily Behavioral Challenge" />
      <CTest />
    </div>
  );
}

export default Behavioral;
