import Default from '@/layouts/default';
import Event_Card from '@/components/Event_Card';
import events_data from '@/components/events_data';
import { useState } from 'react';
import Event_Card2 from '@/components/Event_Card2';
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
          <div className="flex flex-wrap gap-y-5 justify-between">
            <h1
              onClick={() => setEvents(events_data)}
              className="text-2xl mx-8 cursor-pointer text-center w-32 md:w-36 rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              All
            </h1>
            <h1
              onClick={() => clickHandler('tech')}
              className="text-2xl mx-8 cursor-pointer text-center w-32 md:w-36 rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              Technical
            </h1>
            <h1
              onClick={() => clickHandler('cult')}
              className="text-2xl mx-8 cursor-pointer text-center w-32 md:w-36 rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              Cultural
            </h1>
          </div>
          <div className="flex justify-center my-8 flex-wrap">
            {events.map(e => {
              return (
                <Event_Card2
                  title={e.name}
                  club={e.link}
                  poster_link={e.poster}
                  description={e.descr}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Default>
  );
}
export default Events;
