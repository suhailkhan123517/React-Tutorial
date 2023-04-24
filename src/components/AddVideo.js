import React, { useContext, useEffect, useState } from "react";
import useVideoDispatch from "../hooks/VdieosDH";

const initailState = {
  time: "5 years",
  verified: true,
  title: "",
  view: "",
  images:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
};

export default function AddVideo({
  //  dispatch,
  editableVideo,
}) {
  const dispatch = useVideoDispatch();
  const [video, setVideo] = useState(initailState);

  const handlSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      // updateVideo(video);
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initailState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="title"
            value={video.title}
          />
        </div>
        <div>
          <input
            type="text"
            name="view"
            onChange={handleChange}
            placeholder="views"
            value={video.view}
          />
        </div>
        <div>
          <button onClick={handlSubmit}>
            {" "}
            {editableVideo ? "Edit" : "Add"} Video{" "}
          </button>
        </div>
      </form>
    </>
  );
}
