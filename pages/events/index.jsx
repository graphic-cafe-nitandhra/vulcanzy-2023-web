import Default from '@/layouts/default';
import Event_Card from '@/components/Event_Card';
import events_data from '@/components/events_data';
import { useState } from 'react';
import Event_Card2 from '@/components/Event_Card2';
function Events() {
  const [events, setEvents] = useState(events_data);
  // const [all,isAll] = useState(true);
  // const [technical,isTech] = useState(false);
  // const [cultural, isCult] = useState(false);
  function clickHandler(catg) {
    const upd_list = events_data.filter(each => {
      return each.cat === catg;
    });
    setEvents(upd_list);
  }
  function act_handler(catg) {
    if (catg == 'all') {
      document.getElementById('all').classList.add('active');
      document.getElementById('tech').classList.remove('active');
      document.getElementById('cult').classList.remove('active');
    } else if (catg == 'tech') {
      document.getElementById('tech').classList.add('active');
      document.getElementById('all').classList.remove('active');
      document.getElementById('cult').classList.remove('active');
    } else {
      document.getElementById('cult').classList.add('active');
      document.getElementById('tech').classList.remove('active');
      document.getElementById('all').classList.remove('active');
    }
  }
  return (
    <Default>
      <div className="mt-[120px] text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="flex filter_butns items-center flex-wrap gap-y-5 justify-between">
            <h1
              id="all"
              onClick={() => {
                setEvents(events_data);
                act_handler('all');
              }}
              className="text-2xl mx-8 cursor-pointer active text-center w-32 md:w-36 rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
            >
              All
            </h1>
            <h1
              id="tech"
              onClick={() => {
                clickHandler('tech');
                act_handler('tech');
              }}
              className="text-2xl mx-8 cursor-pointer text-center w-32 md:w-36 rounded-[50px]   border-spacing-16 bg-[#DC4B5D]"
            >
              Technical
            </h1>
            <h1
              id="cult"
              onClick={() => {
                clickHandler('cult');
                act_handler('cult');
              }}
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
                  redirect={e.red_link}
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
