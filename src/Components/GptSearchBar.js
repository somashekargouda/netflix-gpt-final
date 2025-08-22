const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
          placeholder="What do you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300">
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
