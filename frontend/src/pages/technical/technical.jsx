import Header from "../../components/behavioral/header";
import VideoResources from "../../pages/technical/VideoResources";
import DSAselect from "./DSAselect";
import "./technical.css";

function Technical() {
  const videos = [
    {
      title: "Binary Search Tree, Two Pointers",
      videoUrl: "https://www.youtube.com/watch?v=GzJoqJO1zdI",
      thumbnailUrl: "https://img.youtube.com/vi/GzJoqJO1zdI/0.jpg",
    },
    {
      title: "Dynamic Programming",
      videoUrl: "https://www.youtube.com/watch?v=aPQY__2H3tE",
      thumbnailUrl: "https://img.youtube.com/vi/aPQY__2H3tE/0.jpg",
    },
    {
      title: "Greedy Algorithms",
      videoUrl: "https://www.youtube.com/watch?v=3XaqEng_K5s",
      thumbnailUrl: "https://img.youtube.com/vi/3XaqEng_K5s/0.jpg",
    },
    {
      title: "Backtracking",
      videoUrl: "https://www.youtube.com/watch?v=gBC_Fd8EE8A",
      thumbnailUrl: "https://img.youtube.com/vi/gBC_Fd8EE8A/0.jpg",
    },
    {
      title: "Trie",
      videoUrl: "https://www.youtube.com/watch?v=3CbFFVHQrk4",
      thumbnailUrl: "https://img.youtube.com/vi/3CbFFVHQrk4/0.jpg",
    },
    {
      title: "Stack, Monotonic Stack",
      videoUrl: "https://www.youtube.com/watch?v=Dq_ObZwTY_Q",
      thumbnailUrl: "https://img.youtube.com/vi/Dq_ObZwTY_Q/0.jpg",
    },
    {
      title: "Hash Map/Set",
      videoUrl: "https://www.youtube.com/watch?v=FhNJ6aikTVI",
      thumbnailUrl: "https://img.youtube.com/vi/FhNJ6aikTVI/0.jpg",
    },
    {
      title: "Sliding Window/Counting Hash Map",
      videoUrl: "https://www.youtube.com/watch?v=QGNAVBn1_bc",
      thumbnailUrl: "https://img.youtube.com/vi/QGNAVBn1_bc/0.jpg",
    },
    {
      title: "Heap/Monotonic Queue",
      videoUrl: "https://www.youtube.com/watch?v=DfljaUwZsOk",
      thumbnailUrl: "https://img.youtube.com/vi/DfljaUwZsOk/0.jpg",
    },
    // Graph + Tree
    {
      title: "Breadth-First Search (BFS)",
      videoUrl: "https://www.youtube.com/watch?v=xlVX7dXLS64",
      thumbnailUrl: "https://img.youtube.com/vi/xlVX7dXLS64/0.jpg",
    },
    {
      title: "Depth-First Search (DFS)",
      videoUrl: "https://www.youtube.com/watch?v=7fujbpJ0LB4",
      thumbnailUrl: "https://img.youtube.com/vi/7fujbpJ0LB4/0.jpg",
    },
    // LinkedList
    {
      title: "Fast and slow pointers",
      videoUrl: "https://www.youtube.com/watch?v=HNY_RLNgifk",
      thumbnailUrl: "https://img.youtube.com/vi/HNY_RLNgifk/0.jpg",
    },
    {
      title: "Use a 'Previous' pointer",
      videoUrl: "https://www.youtube.com/watch?v=6TdAojD698Q",
      thumbnailUrl: "https://img.youtube.com/vi/6TdAojD698Q/0.jpg",
    },
    {
      title: "Maintain original head using a 'temp' pointer",
      videoUrl: "https://www.youtube.com/watch?v=3O_f_sk3mFc",
      thumbnailUrl: "https://img.youtube.com/vi/3O_f_sk3mFc/0.jpg",
    },
  ];

  return (
    <div className="technical">
      <Header subtitle="Technical Interview Road Map" />
      <DSAselect />

      <h2>
        <u>Video Resources</u>
      </h2>
      <div id="video-container">
        {videos.map((video, index) => (
          <VideoResources
            key={index}
            videoUrl={video.videoUrl}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Technical;
