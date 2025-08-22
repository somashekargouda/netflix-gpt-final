import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backgroundImageURL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={backgroundImageURL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;
