import "./chatbox.css";
import "../../assets/fonts.css";

function ChatBox() {
  return (
    <ul className="chatbox">
      <li className="chat incoming">
        <span className="material-symbols-outlined">smart_toy</span>
        <p>Haiii</p>
      </li>
      <li class="chat outgoing">
        <p>Heyyy</p>
      </li>
    </ul>
  );
}

export default ChatBox;
