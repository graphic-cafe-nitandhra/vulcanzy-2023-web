function Event_Card2(props) {
  return (
    <div className="my-8 mx-8 ">
      <div class="flip-card bg-transparent w-[22.5rem] h-[22.5rem]">
        <div class="flip-card-inner ">
          <div
            class={`flip-card-front ${
              props.poster_link == null ? 'box_border' : ''
            }`}
          >
            {props.poster_link == null ? (
              <>
                <p class="title ">{props.title}</p>
                <h4 className="text-[.85rem] px-2">{props.description}</h4>
                <p>
                  <img
                    className="w-[5rem] club_logo h-auto rounded-full absolute my-4 top-0 left-[37.5%]"
                    src={props.club}
                  />
                </p>
              </>
            ) : (
              <img
                className="w-full h-full rounded-[25px] aspect-auto"
                src={props.poster_link}
              />
            )}
            {/* <img
              className="w-full h-full rounded-[25px] aspect-auto"
              src={props.poster_link}
            /> */}
          </div>
          <div
            class={`flip-card-back  ${
              props.poster_link == null ? '' : 'box_border'
            }`}
          >
            {props.poster_link == null ? (
              <>
                <button class="learn-more w-[15rem] h-[3.75rem] absolute bottom-[42%]  left-[20%]">
                  {' '}
                  <a href={props.redirect} target="_blank">
                    Register
                  </a>
                </button>
                <img
                  className="w-full h-full rounded-[25px] aspect-auto"
                  src={props.poster_link}
                />
              </>
            ) : (
              <>
                <p class="title my-4">{props.title}</p>
                <h4 className="text-[.8rem] px-2">{props.description}</h4>
                <button class="learn-more w-[15rem] h-[3.75rem] absolute bottom-[8%]  left-[18%]">
                  {' '}
                  <a href={props.redirect} target="_blank">
                    Register
                  </a>
                </button>
                <p>
                  <img
                    className="w-[5rem] h-auto rounded-full club_logo absolute  top-1 left-[37.5%]"
                    src={props.club}
                  />
                </p>
              </>
            )}
            {/* <p class="title my-4">{props.title}</p>
            <h4 className="text-[.85rem] px-2">{props.description}</h4> */}
            {/* <button class="learn-more w-[15rem] h-[3.75rem] absolute bottom-[8%] left-[18%]">
              {' '}
              <a href={props.redirect} target="_blank">
                Register
              </a>
            </button> */}
            {/* <p>
              <img
                className="w-[5rem] h-auto rounded-full absolute my-4 top-0 left-[37.5%]"
                src={props.club}
              />
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Event_Card2;
