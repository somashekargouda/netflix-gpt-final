import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const mainMovie =
    Array.isArray(trailerVideo) && trailerVideo.length > 0
      ? trailerVideo[0]
      : null;
  const dispatch = useDispatch();
  const getMyVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrailerVideo(json.results));
  };
  useEffect(() => {
    // Fetch video details when the component mounts
    getMyVideo();
  }, [movieId]);
  return (
    <div>
      {mainMovie && mainMovie.key && (
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + mainMovie.key}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};
export default VideoBackground;
