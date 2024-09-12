import { useState, useEffect } from 'react';

function Timer({ initialMinutes }) {
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>Temporizador: {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h2>
    </div>
  );
}

export default Timer;
