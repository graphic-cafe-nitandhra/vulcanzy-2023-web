import Default from '@/layouts/default';
import { useState } from 'react';
function Events() {
  let nums = [
    {
      val: 1,
      cat: 'odd',
    },
    {
      val: 2,
      cat: 'even',
    },
    {
      val: 3,
      cat: 'odd',
    },
    {
      val: 4,
      cat: 'even',
    },
    {
      val: 5,
      cat: 'odd',
    },
    {
      val: 6,
      cat: 'even',
    },
    {
      val: 7,
      cat: 'odd',
    },
  ];
  const [events, setEvents] = useState(nums);
  function clickHandler(catg) {
    const upd_list = nums.filter(each => {
      return each.cat === catg;
    });
    setEvents(upd_list);
  }
  return (
    <Default>
      <div className="mt-[120px] text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between">
            <h1
              onClick={() => clickHandler('odd')}
              className="text-[1.75rem] flex mx-8 cursor-pointer items-center justify-center w-[10rem] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              All
            </h1>
            <h1
              onClick={() => clickHandler('even')}
              className="text-[1.75rem] flex mx-8 cursor-pointer items-center justify-center w-[10rem] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              Technical
            </h1>
            <h1
              onClick={() => setEvents(nums)}
              className="text-[1.75rem] flex mx-8 cursor-pointer items-center justify-center w-[10rem] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              Cultural
            </h1>
          </div>
          <div className="flex flex-wrap">
            {events.map(e => {
              return <h4>{e.val}</h4>;
            })}
          </div>
        </div>
      </div>
    </Default>
  );
}
export default Events;
