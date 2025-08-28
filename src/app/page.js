import Image from "next/image";
import Slider from "./components/Slider";
// import LandingHighlight from "./components/landinghighlight";

export default function Home() {
  return (
    <div className="max-w-[1600px] w-11/12 mx-auto mt-12">
      <Slider/>
      {/* <LandingHighlight/> */}
    </div>
  );
}
