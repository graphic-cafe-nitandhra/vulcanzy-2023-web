function Event_Card(props) {
  return (
    <div className="text-white my-8 mx-8 w-[25rem] h-[22.5rem] event-card">
      <div className="flex items-center flex-col">
        <img
          className="w-full  rounded-[25px] aspect-square"
          src="https://i.ibb.co/54wSZmH/ESCHEWAL-1080-1350-px-1080-1080-px.png"
        />
        <div className="flex text-[1.5rem] my-4 px-4 justify-between items-center w-full">
          <h4>{props.title}</h4>
          <h4>
            <img src={props.club} className="w-[5rem] h-auto rounded-full" />
          </h4>
        </div>
        <h2 className="text-[1.75rem] flex mx-8 cursor-pointer items-center justify-center w-[10rem] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]">
          View More
        </h2>
      </div>
    </div>
  );
}
export default Event_Card;
