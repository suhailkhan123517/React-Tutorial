import { useContext } from "react";
import VideoDispatch from "../context/VideoDispatch";

function useVideoDispatch() {
  return useContext(VideoDispatch);
}

export default useVideoDispatch;
