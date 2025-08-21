const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute bg-gradient-to-b from-black to-transparent">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black  text-xl p-4 px-12 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white  text-xl p-4 px-12 mx-2 bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
