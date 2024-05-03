import { useState } from "react";
import {
  OPTIONS,
  SEARCH_CELEB_URL,
  SEARCH_MOVIE_URL,
  SEARCH_TV_URL,
  SEARCH_URL,
} from "../../utils/constants";

function Search() {
  const [Input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getSearch = async () => {
    const search = Input;
    if (selectedOption === "All") {
      const data = await fetch(SEARCH_MOVIE_URL + search, OPTIONS);
      const json = await data.json();
      console.log(json);
      setInput("");
    } else if (selectedOption === "TV") {
      const data = await fetch(SEARCH_TV_URL + search, OPTIONS);
      const json = await data.json();
      console.log(json);
      setInput("");
    } else if (selectedOption === "Movies") {
      const data = await fetch(SEARCH_MOVIE_URL + search, OPTIONS);
      const json = await data.json();
      console.log(json);
      setInput("");
    } else {
      const data = await fetch(SEARCH_CELEB_URL + search, OPTIONS);
      const json = await data.json();
      console.log(json);
      setInput("");
    }
  };

  return (
    <div className="w-2/3 text-black ml-5">
      <div className="input flex">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="rounded-l-md bg-white  focus:outline-none  text-black font-semibold border-2"
        >
          <option value="All" className=" bg-slate-950 text-white border">
            All
          </option>
          <option value="Movies" className=" bg-slate-950 text-white border">
            Movies
          </option>
          <option value="TV" className=" bg-slate-950 text-white border">
            TV Series
          </option>
          <option
            value="Celeberities"
            className=" bg-slate-950 text-white border"
          >
            Celeberities
          </option>
        </select>
        <div className="relative">
          <input
            type="text"
            placeholder="Search IMDb"
            className="w-full pl-4 py-1  rounded-r-lg  focus:outline-none "
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={getSearch}
            className="absolute w-10 h-10 rounded-[50%]  overflow-hidden top-0 right-0  "
          >
            <img src={SEARCH_URL} alt="Search" className=" w-6  object-fit " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
