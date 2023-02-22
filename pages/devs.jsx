import Default from '@/layouts/default';
function Devs() {
  return (
    <Default>
      <div className="mt-[120px] flex justify-center items-center text-[1.5rem] text-white h-screen">
        <div>
          <h2 className=" my-8 text-white text-center">
            Developed for Vulcanzy & By:
          </h2>
          <div className="flex flex-col items-center justify-center">
            <h2>Riyaz Syed & Mamoor Jaan Khan</h2>
            <h2>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                Contact Us by clicking here
              </a>
            </h2>
          </div>
        </div>
      </div>
    </Default>
  );
}
export default Devs;
