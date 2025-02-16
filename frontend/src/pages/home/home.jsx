import "./home.css";
import Header from "../../components/behavioral/header";

function Home() {
  return (
    <div>
      <Header />
      {/* <h1 id="title">Interview Prep AI</h1> */}
      <h2 id="video-demo-title">Video Demo</h2>
      <div id="video-demo">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/KkLr1FT43vE?si=NaGX4K25u6fd1JZ9"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
