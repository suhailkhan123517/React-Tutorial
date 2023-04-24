import { useContext, useReducer, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/playButton/PlayButton";
import Video from "./components/Video/Video";
import videosDB from "./data/Data";
import AddVideo from "./components/AddVideo";
import ThemeContext from "./context/ThemeContext";
import VideoContext from "./context/VideoContext";
import VideoDispatch from "./context/VideoDispatch";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("");

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const themContext = useContext(ThemeContext);

  // const [videos, setVideos] = useState(videosDB);

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }
  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  //   // setVideos(videos.filter((video) => video.id !== id));
  // }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video });

  //   const index = videos.findIndex((v) => v.id === video.id);
  //   const newVideos = [...videos];
  //   newVideos.splice(index, 1, video);
  //   // setVideos(newVideos);
  // }

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideoContext.Provider value={videos}>
          <VideoDispatch.Provider value={dispatch}>
            <div className={`app  ${mode}`}>
              <button onClick={() => setMode(mode === "" ? "dark" : "")}>
                {mode ? "LightMode" : "DarkMode"}
              </button>
              {/* <AddVideo
          addVideos={addVideos}
          updateVideo={updateVideo}
          editableVideo={editableVideo}
        /> */}
              <AddVideo
                // dispatch={dispatch}
                // updateVideo={updateVideo}
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
                  // deleteVideo={deleteVideo}
                  // dispatch={dispatch}
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
          </VideoDispatch.Provider>
        </VideoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
