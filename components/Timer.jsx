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
    <div id="timer">
      <section className="hurry-up">
        <div>
          <div className="flex text-center  justify-between">
            <div class="container-day px-6">
              <h3 class="day text-[3rem]">--</h3>
              <label className="text-[2.25rem]">Days</label>
            </div>
            <div class="container-hour px-6">
              <h3 class="hour">--</h3>
              <label className="text-[2.25rem]">Hours</label>
            </div>
            <div class="container-minute px-6">
              <h3 class="minute">--</h3>
              <label className="text-[2.25rem]">Minutes</label>
            </div>
            <div class="container-second px-6">
              <h3 class="second">--</h3>
              <label className="text-[2.25rem]">Seconds</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Timer;
