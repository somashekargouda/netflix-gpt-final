import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const mainMovie =
    Array.isArray(trailerVideo) && trailerVideo.length > 0
      ? trailerVideo[0]
      : null;

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      {mainMovie && mainMovie.key && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            mainMovie.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};
export default VideoBackground;
