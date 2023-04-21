import { useReducer, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/playButton/PlayButton";
import Video from "./components/Video/Video";
import videosDB from "./data/Data";
import AddVideo from "./components/AddVideo";

function App() {
  function videoReducer() {}

  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  // const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }

  return (
    <>
      <div className="app">
        <AddVideo
          addVideos={addVideos}
          updateVideo={updateVideo}
          editableVideo={editableVideo}
        />
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            time={video.time}
            view={video.view}
            verified={video.verified}
            image={video.images}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
            <PlayButton
              name={video.title}
              onPlay={() => console.log("playing..", video.title)}
              onPause={() => console.log("Paused..", video.title)}
            />
          </Video>
        ))}
        <div style={{ clear: "both" }}>
          {/* <PlayButton
            name="Play"
            onPlay={() => console.log("play")}
            onPause={() => console.log("Pause")}
          /> */}
          {/* <PlayButton name="Pause" onClick={() => console.log("pause")} /> */}
        </div>
        <Counter />
      </div>
    </>
  );
}

export default App;
