function Event_Card2(props) {
  return (
    <div className="my-8 mx-8 ">
      <div class="flip-card bg-transparent w-[22.5rem] h-[22.5rem]">
        <div class="flip-card-inner ">
          <div class="flip-card-front">
            <img
              className="w-full h-full rounded-[25px] aspect-auto"
              src={props.poster_link}
            />
          </div>
          <div class="flip-card-back  box_border">
            <p class="title my-4">{props.title}</p>
            <h4 className="text-[.95rem] px-2">{props.description}</h4>
            <button class="learn-more w-[15rem] h-[auto] absolute bottom-[8%] left-[18%]">
              {' '}
              Learn More
            </button>
            <p>
              <img
                className="w-[5rem] h-auto rounded-full absolute my-4 top-0 left-[37.5%]"
                src={props.club}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Event_Card2;
