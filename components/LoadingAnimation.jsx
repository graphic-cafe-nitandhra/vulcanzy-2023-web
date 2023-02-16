import Image from 'next/image';
import whiteLogo from '../public/assets/imgs/whiteLogo.svg';

export const LoadingAnimation = ({}) => {
  return (
    <div className="h-screen w-screen bg-[#070032] flex justify-center items-center">
      <div className="loader-1 flex justify-center items-center">
        <div className="loader-2 flex justify-center items-center">
          <div className="loader-3 flex justify-center items-center">
            <div className="loader-4 flex justify-center items-center">
              <Image src={whiteLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
