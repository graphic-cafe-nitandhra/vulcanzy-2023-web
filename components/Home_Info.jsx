import Contact from './Contact';
function Home_Info() {
  let info = [
    'Feel free to contact us. +917489119996',
    'Old Aerodrome,Near Kondruprolu,Tadepalligudem,Andhra Pradesh,534101',
    'Feel free to mail us at: vulcanzy@nitandhra.ac.in',
  ];
  let links = [
    'tel:+917489119996',
    'https://www.google.com/maps/dir//16.8321691,81.5293097/@16.832169,81.52931,16z?hl=en',
    'mailto:vulcanzy@nitandhra.ac.in',
  ];
  let nums = [0, 1, 2];
  return (
    <div className="hero-2 flex justify-center  h-screen text-center">
      <div className=" text-white flex my-[22.5rem] justify-around  flex-wrap text-[1.25rem]">
        {nums.map(e => {
          return <Contact info={info[e]} redirects={links[e]} />;
        })}
      </div>
    </div>
  );
}
export default Home_Info;
