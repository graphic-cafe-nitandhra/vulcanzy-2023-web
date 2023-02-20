import Image from 'next/image';
import Timer from './Timer';
import Home_Info from './Home_Info';
import rhapsody_logo from '../public/assets/imgs/rhapsody_logo.png';
function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="flex pt-[140px] h-screen flex-col items-center justify-between">
          <div className="flex-1 flex flex-col justify-between w-full">
            <div className="flex flex-col items-center">
              <Image
                src={rhapsody_logo}
                alt="Rhapsody Logo"
                width={250}
                height={100}
              />
              <h1 className="subhead text-white">#RHAPSODY</h1>
            </div>
            <div className="text-white font-bold flex flex-col gap-10 md:flex-row md:items-center justify-between w-full px-5 md:px-10">
              <div>
                <h2 className="text-4xl">JOIN THE RYTHM OF #RHAPSODY:</h2>
                <h2 className="text-2xl font-[700]">
                  Experience the ultimate college fest celebration
                </h2>
              </div>
              <label className="text-2xl flex items-center justify-center w-[100px] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]">
                <a href="https://bit.ly/3xuySzf" target="_blank">
                  Join
                </a>
              </label>
            </div>
          </div>
          <div className="gradient-fade" />
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center justify-center h-screen bg-black text-white">
        <h1 className="text-5xl text-center text-white">
          LET THE MUSIC BEGIN!
        </h1>
        <Timer />
      </div>
      <div className="min-h-screen">
        <Home_Info />
      </div>
    </>
  );
}
export default HomePage;
