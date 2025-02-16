import "./chatbot-test.css";
import "../../assets/fonts.css";

function CTest() {
  return (
    <div className="chatbot">
      <ul className="chatbox">
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Hai! How can I help you?</p>
        </li>
        <li className="chat outgoing">
          <p>I need help with my interview at Google! Can you give me a sample question?</p>
        </li>
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Sure! Give me an example of a time you had a conflict with a team member. How did you handle it?</p>
        </li>
        <li className="chat outgoing">
          <p>At LabCorp Inc., my team was responsible for completing a project with a short deadline. I decided it would be best to delegate individual tasks to each team member, but one person disagreed and thought it would be better to meet to work on it together for a few days each week. I decided to schedule a lunch meeting with this team member to understand his idea better and why he disagreed.
          After this meeting, we compromised by completing the smaller tasks individually and working on the larger ones as a group. Our team was able to complete the task before the deadline. I also gained a better understanding of my team members and their work preferences and learned that compromise can sometimes be the best way to resolve a conflict quickly. </p>
        </li>
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Sounds great! But maybe you could say this...</p>
        </li>
        <li className="chat outgoing">
          <p>Got it!</p>
        </li>
      </ul>
      <div className="chatinput">
        <textarea placeholder="Enter a message" required></textarea>
        <span id="send-btn" className="material-symbols-outlined">
          send
        </span>
      </div>
    </div>
  );
}

export default CTest;
