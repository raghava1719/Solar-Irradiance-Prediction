import React, { useState } from 'react';
import './App.css';

function App() {
  const [parameters, setParameters] = useState({
    temperature: '',
    pressure: '',
    humidity: '',
    windDirection: '',
    speed: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
    risehour: '',
    riseminuter: '',
    sethour: '',
    setminute: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameters({
      ...parameters,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('flask-hello-world-nxzlg0trh-raghavas-projects-68650adf.vercel.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ parameters: Object.values(parameters) }),
    });
    const data = await response.json();
    alert(`Prediction: ${data.prediction}`);
  };

  return (
    <div className="container">
      <h1>Solar Irradiance Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Temperature:</label>
          <input
            type="text"
            name="temperature"
            value={parameters.temperature}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pressure:</label>
          <input
            type="text"
            name="pressure"
            value={parameters.pressure}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Humidity:</label>
          <input
            type="text"
            name="humidity"
            value={parameters.humidity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Wind Direction (Degrees):</label>
          <input
            type="text"
            name="windDirection"
            value={parameters.windDirection}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Speed:</label>
          <input
            type="text"
            name="speed"
            value={parameters.speed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Month:</label>
          <input
            type="text"
            name="month"
            value={parameters.month}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Day:</label>
          <input
            type="text"
            name="day"
            value={parameters.day}
            onChange={handleChange}
          />
        </div>
          <h2> time :</h2>
        <div id='time'>
        <div>
          <label>Hour:</label>
          <input
            type="text"
            name="hour"
            value={parameters.hour}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Minute:</label>
          <input
            type="text"
            name="minute"
            value={parameters.minute}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Second:</label>
          <input
            type="text"
            name="second"
            value={parameters.second}
            onChange={handleChange}
            />
      </div>
        </div >
          <h2>Sunrise and Sunset Time:</h2>
        <div id='time'>
        <div >
          <label>Rise Hour:</label>
          <input
            type="text"
            name="risehour"
            value={parameters.risehour}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Rise Minute:</label>
          <input
            type="text"
            name="riseminuter"
            value={parameters.riseminuter}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Set Hour:</label>
          <input
            type="text"
            name="sethour"
            value={parameters.sethour}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Set Minute:</label>
          <input
            type="text"
            name="setminute"
            value={parameters.setminute}
            onChange={handleChange}
            />
        </div>
            </div>
        <button type="submit">Predict</button>
      </form>
    </div>
  );
}

export default App;
