import Image from 'next/image';
import Timer from './Timer';
import vul_black from '../public/assets/imgs/Vulcanzy_black.png';
function HomePage() {
  return (
    <div className="flex pt-[140px] flex-col items-center justify-start h-full">
      <Image src={vul_black} alt="Black-Logo" width={250} height={100}></Image>
      <h1 className="subhead text-center text-white">
        <i>#RHAPSODY</i>
      </h1>
      {/* <h1 className="text-[3rem] text-white">LET THE MUSIC BEGIN!</h1>
      <h2 className="text-[3rem] my-16 text-white">
        <Timer />
      </h2> */}
      <div className="text-white my-[18rem] font-[400]  flex items-center  justify-between w-full">
        <div className="ml-12">
          <h2 className="text-[2rem]">Join the Rhythm of #RHAPSODY:</h2>
          <h2 className="text-[1.5rem]">
            Experience the ultimate college fest celebration
          </h2>
        </div>
        <label className=" text-[1.5rem] mr-12 flex items-center justify-center w-[100px] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]">
          Join
        </label>
      </div>
      <h1 className="text-[3rem] text-black">LET THE MUSIC BEGIN!</h1>
      <h2 className="text-[3rem] my-16 text-black">
        <Timer />
      </h2>
    </div>
  );
}
export default HomePage;
