import React, { useContext } from "react";
import "./Video.css";
import VideoDispatch from "../../context/VideoDispatch";
import useVideoDispatch from "../../hooks/VdieosDH";

export default function Video({
  id,
  title,
  channel,
  time,
  view,
  verified,
  image,
  children,
  // deleteVideo,
  editVideo,
  // dispatch,
}) {
  const dispatch = useContext(VideoDispatch);
  const theme = useVideoDispatch;
  return (
    <>
      <div className="container">
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          E
        </button>
        <div className="pic">
          <img src={image} alt="" />
        </div>
        <div className={`title ${theme}`}>{title} tutorial - Components</div>
        <div className={`channel ${theme}`}>
          {channel} {verified && "✔️"}
        </div>
        <div className={`views ${theme}`}>
          {view} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
