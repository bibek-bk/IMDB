import { SEARCH_URL } from "../../utils/constants";

function Search() {
  return (
    <div className="w-2/3 text-black">
      <div className="input relative">
        <input
          type="text"
          placeholder="Search IMDb"
          className="w-full pl-4 py-1 ml-5 rounded-lg"
        />
        <button className="absolute w-10 h-10 rounded-[50%]  overflow-hidden top-0 right-0  ">
          <img src={SEARCH_URL} alt="Search" className=" w-6  object-fit" />
        </button>
      </div>
    </div>
  );
}

export default Search;
