import { useContext } from "react";
import VideoContext from "../context/VideoContext";

function useVideoH() {
  return useContext(VideoContext);
}

export default useVideoH;
