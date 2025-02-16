import "./chatinput.css";
import "../../assets/fonts.css";

function ChatInput() {
  return (
    <div className="chatinput">
      <textarea placeholder="Enter a message..." required></textarea>
      <span id="send-btn" className="material-symbols-outlined">
        send
      </span>
    </div>
  );
}

export default ChatInput;
