import React from "react";
import "./Video.css";

export default function Video({
  id,
  title,
  channel,
  time,
  view,
  verified,
  image,
  children,
  deleteVideo,
  editVideo,
}) {
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          E
        </button>
        <div className="pic">
          <img src={image} alt="" />
        </div>
        <div className="title">{title} tutorial - Components</div>
        <div className="channel">
          {channel} {verified && "✔️"}
        </div>
        <div className="views">
          {view} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
