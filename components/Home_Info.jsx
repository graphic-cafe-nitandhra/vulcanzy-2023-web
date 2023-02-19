import Contact from './Contact';

let infoArr = [
  {
    text: 'Feel free to contact us. +917489119996',
    link: 'tel:+917489119996',
  },
  {
    text: 'Old Aerodrome, Near Kondruprolu, Tadepalligudem, Andhra Pradesh, 534101',
    link: 'https://www.google.com/maps/dir//16.8321691,81.5293097/@16.832169,81.52931,16z?hl=en',
  },
  {
    text: 'Feel free to mail us at: vulcanzy@nitandhra.ac.in',
    link: 'mailto:vulcanzy@nitandhra.ac.in',
  },
];

function Home_Info({}) {
  return (
    <div className="hero-2 flex justify-center  h-screen text-center">
      <div className=" text-white flex my-[22.5rem] justify-around  flex-wrap text-[1.25rem]">
        {infoArr.map(({ text, link }) => {
          return <Contact info={text} redirects={link} />;
        })}
      </div>
    </div>
  );
}
export default Home_Info;
