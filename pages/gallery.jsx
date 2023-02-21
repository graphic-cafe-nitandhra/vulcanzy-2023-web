import Default from '@/layouts/default';
import DemoCarousel from '@/components/CarouselM';
function Gallery() {
  const imgs1 = [
    'https://i.ibb.co/tJBnHC7/Dance-1.jpg',
    'https://i.ibb.co/dm0dXgx/Dance-2.jpg',
    'https://i.ibb.co/KxgZkKQ/Student-End-Pic.jpg',
  ];
  const imgs2 = [
    'https://i.ibb.co/2v59G2K/DSC-0186.jpg',
    'https://i.ibb.co/mFsGcYS/Faculty.jpg',
    'https://i.ibb.co/gDZ8fpW/Faculty-shots.jpg',
  ];
  const imgs3 = [
    'https://i.ibb.co/4KqMsZC/Students-1.jpg',
    'https://i.ibb.co/ChjTnY0/Vulcanzy-4.jpg',
    'https://i.ibb.co/HNH4hnq/Vulcanzy-5.jpg',
  ];
  const imgs4 = [
    'https://i.ibb.co/zn5skf0/Music.jpg',
    'https://i.ibb.co/Zftw3vt/Music-1.jpg',
    'https://i.ibb.co/7tzHYCM/Music-2.jpg',
    'https://i.ibb.co/CMjRsDf/Music-3.jpg',
    'https://i.ibb.co/QQLm6bP/Vulcanzy-1.jpg',
    'https://i.ibb.co/6ZcBYVR/Vulcanzy-2.jpg',
  ];
  return (
    <Default>
      <div className="mt-[120px]">
        {/* <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl text-white text-center">
            Gallery Page coming Soon...
          </h1>
        </div> */}
        <div className="flex flex-wrap  justify-center  gap-4">
          <div className=" gallery flex flex-wrap gap-4  flex-col w-[40%] h-full">
            <DemoCarousel src={imgs1} hei="60%" />
            <DemoCarousel src={imgs3} scroll="vertical" hei="40%" />
          </div>
          <div className=" gallery flex flex-wrap-reverse gap-4 flex-col w-[55%] h-full">
            <DemoCarousel src={imgs2} scroll="vertical" hei="40%" />
            <DemoCarousel src={imgs4} hei="60%" />
          </div>
        </div>
      </div>
    </Default>
  );
}
export default Gallery;
