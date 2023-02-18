function Event_Card(props) {
  return (
    <div className="text-white my-4 mx-8 w-[25rem] h-[22.5rem] event-card">
      <div className="flex items-center flex-col">
        <img
          className="w-full h-[10rem] rounded-[25px]"
          src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600"
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
