import { useEffect, useRef, useState } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("0");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");




var date = '10/31/2022';

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? `0${days}` : days);
        setTimerHours(hours < 10 ? `0${hours}` : hours);
        setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes);
        setTimerSeconds(seconds < 10 ? `0${seconds}` : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    const intVal = interval.current;
    return () => clearInterval(intVal);
  });

  return (
    <div className={'timer_div'}>
      <h4 className={'time_ticking'}>
        {timerDays} <span>days,</span>
      </h4>

      <h4 className={'time_ticking'}>
        {timerHours}
        <span>hours,</span>
      </h4>

      <h4 className={'time_ticking'}>
        {timerMinutes} <span>minutes,</span>
      </h4>

      <h4 className={'time_ticking'}>
        {timerSeconds} <span>seconds</span>
      </h4>
    </div>
  );
};

export default CountDown;
