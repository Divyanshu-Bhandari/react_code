import React, { useState } from "react";

import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [clock, setClock] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  const getDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    setDate(`${day} / ${month} / ${year}`);
  };

  const getClock = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    setClock(`${hours} : ${minutes} : ${seconds}`);
  };

  const startClock = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const id = setInterval(getClock, 1000);
    setIntervalId(id);
  };

  const stopClock = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div className="App">
      <h2>Current Date: {date}</h2>
      <button onClick={getDate}>Set Date</button>

      <h2>{clock}</h2>
      <button onClick={startClock}>Start Clock</button>
      <button onClick={stopClock}>Stop Clock</button>
    </div>
  );
}

export default App;
