import "./WeatherForecast.css";
const WeatherForecast = ({ weatherForecast }) => (
  <div className="weather">
    <h2>{weatherForecast.day} </h2>
    <img src={weatherForecast.img} alt={weatherForecast.alt} />
    <p>
      <span>conditions: </span> {weatherForecast.conditions}
    </p>
    <p>
      <span>time: </span> {weatherForecast.time}
    </p>
  </div>
);
export default WeatherForecast;