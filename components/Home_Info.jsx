import Contact from './Contact';

let infoArr = [
  {
    text: 'Feel free to contact us. +917489119996',
    link: 'tel:+917489119996',
    icon: <></>,
  },
  {
    text: 'Old Aerodrome, Near Kondruprolu, Tadepalligudem, Andhra Pradesh, 534101',
    link: 'https://www.google.com/maps/dir//16.8321691,81.5293097/@16.832169,81.52931,16z?hl=en',
    icon: <></>,
  },
  {
    text: 'Feel free to mail us at: vulcanzy@nitandhra.ac.in',
    link: 'mailto:vulcanzy@nitandhra.ac.in',
    icon: <img src="../public/assets/imgs/mail.svg" />,
  },
];

function Home_Info({}) {
  return (
    <div className="hero-2 flex justify-center  h-screen text-center">
      <div className=" text-white flex my-[22.5rem] justify-around  flex-wrap text-[1.25rem]">
        {infoArr.map(({ text, link, icon }) => {
          return <Contact info={text} redirects={link} icon={icon} />;
        })}
      </div>
    </div>
  );
}
export default Home_Info;
