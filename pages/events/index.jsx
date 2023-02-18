import Default from '@/layouts/default';
import Event_Card from '@/components/Event_Card';
import events_data from '@/components/events_data';
import { useState } from 'react';
function Events() {
  const [events, setEvents] = useState(events_data);
  function clickHandler(catg) {
    const upd_list = events_data.filter(each => {
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
              onClick={() => setEvents(events_data)}
              className="text-[1.75rem] flex mx-8  cursor-pointer items-center justify-center w-[10rem] h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              Cultural
            </h1>
          </div>
          <div className="flex justify-center my-8 flex-wrap">
            {events.map(e => {
              return <Event_Card title={e.val} />;
            })}
          </div>
        </div>
      </div>
    </Default>
  );
}
export default Events;
