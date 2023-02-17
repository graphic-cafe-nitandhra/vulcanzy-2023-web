import Image from 'next/image';
import Timer from './Timer';
import Home_Info from './Home_Info';
import vul_black from '../public/assets/imgs/Vulcanzy_black.png';
function HomePage() {
  return (
    <div>
      <div className="flex pt-[140px] flex-col items-center justify-start h-screen">
        <Image
          src={vul_black}
          alt="Black-Logo"
          width={250}
          height={100}
        ></Image>
        <h1 className="subhead text-center text-white">
          <i>#RHAPSODY</i>
        </h1>
        <div className="text-white mt-[17rem] font-[700]  flex items-center  justify-between w-full">
          <div className="ml-12">
            <h2 className="text-[2rem]">JOIN THE RYTHM OF #RHAPSODY:</h2>
            <h2 className="text-[1.5rem] font-[700]">
              Experience the ultimate college fest celebration
            </h2>
          </div>
          <label className=" text-[1.5rem] mr-12 flex items-center justify-center w-[100px] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]">
            <a href="https://bit.ly/3xuySzf" target="_blank">
              Join
            </a>
          </label>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-[3rem] text-center text-white">
          LET THE MUSIC BEGIN!
        </h1>
        <h2 className="text-[3rem] my-16 text-white">
          <Timer />
        </h2>
      </div>
      <div className="h-screen">
        <Home_Info />
      </div>
    </div>
  );
}
export default HomePage;
