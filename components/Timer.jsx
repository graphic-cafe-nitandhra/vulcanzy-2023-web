import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const countdown = () => {
      const countDate = new Date('Feburary 23,2023 00:00:00').getTime();
      const now = new Date().getTime();
      var gap = countDate - now;
      if (gap < 0) {
        gap = 0;
      }
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      document.querySelector('.day').innerText = days;
      document.querySelector('.hour').innerText = hours;
      document.querySelector('.minute').innerText = minutes;
      document.querySelector('.second').innerText = seconds;
    };
    const time = setInterval(countdown, 1000);
    return () => {
      clearInterval(time);
    };
  });
  return (
    <section className="hurry-up text-5xl">
      <div className="flex flex-wrap gap-y-8 text-center justify-around md:justify-between">
        <div className="px-6">
          <h3 className="day">--</h3>
          <label className="text-[2.25rem]">Days</label>
        </div>
        <div className="px-6">
          <h3 className="hour">--</h3>
          <label className="text-[2.25rem]">Hours</label>
        </div>
        <div className="px-6">
          <h3 className="minute">--</h3>
          <label className="text-[2.25rem]">Minutes</label>
        </div>
        <div className="px-6">
          <h3 className="second">--</h3>
          <label className="text-[2.25rem]">Seconds</label>
        </div>
      </div>
    </section>
  );
}
export default Timer;
