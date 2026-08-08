import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h2>Digital Clock</h2>

        <h1 className="display-3 text-primary">
          {time.toLocaleTimeString()}
        </h1>

        <p>
          {time.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default DigitalClock;