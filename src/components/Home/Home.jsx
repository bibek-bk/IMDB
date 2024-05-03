import { data } from "../../utils/constants";
import Header from "../Header/Header";
import Sliderr from "./Slider";

function Home() {
   
    //   const media_type = data.results.map(r=> r.media_type)
    //   console.log(media_type);
  return (
    <div>
      {" "}
      <Header />
      
<Sliderr/>
    </div>
  );
}

export default Home;
