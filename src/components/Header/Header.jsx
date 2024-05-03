// import { useNavigate } from "react-router-dom";
import { LOGO_URL, USER_URL, WATCHLIST_URL } from "../../utils/constants";
import Search from "./Search";

function Header() {
  // const navigate = useNavigate();
  return (
    <div
      className="w-full px-16 bg-[#121212] text-white flex items-center justify-between py-4 "
      // onClick={() => {
      //   navigate("/");
      // }}
    >
      <img src={LOGO_URL} alt="LOGO" className="w-16" />
      <Search />
      <button className="flex items-center gap-2 ">
        <img className="bg-white w-7" src={WATCHLIST_URL} alt="" />
        Watchlist{" "}
        <span className="w-5 h-5 rounded-[50%] bg-yellow-500 flex items-center justify-center text-sm">
          2
        </span>
      </button>
      <div
        className="user flex  items-center gap-2  "
        // onClick={() => {
        //   navigate("/watch");
        // }}
      >
        <img src={USER_URL} alt="user" className="w-6 rounded-[50%]" />
        user
      </div>
      <div className="EN text-sm">EN ^ </div>
    </div>
  );
}

export default Header;
