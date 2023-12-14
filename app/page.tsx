import { NextPage } from "next";
import Direction from "./components/Direction";
import Slider from "./components/Slider";

const Home: NextPage = () => {
  return (
    <div>
      <Slider />
      <Direction />

    </div>
  );
}

export default Home;