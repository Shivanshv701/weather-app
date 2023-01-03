import React from "react";
import './App.css';
function App() {


/*
  const [weather, setWeather] = React.useState('');
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude, position.coords.longitude);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7b8d6c56df292d95f816f38d57ddd444&units=metric`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setWeather(data);
          }).catch(err => console.log(err));
      });
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }, [])

  return (
    <div>
      {

        weather.main !== undefined ? <div className="App-header">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <div className="mt-2">
                  <h1 className="display-1"><i className="fa-solid text-danger fa-lg fa-cloud-sun"></i> Weather App</h1>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 offset-md-4">
                <h2 className="display-4">{weather.name}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h1 className="display-1">{weather.weather[0].main}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4 mb-4 mt-3">
                <h3 className="display-2">{Math.round(weather.main.temp)}<sup>o</sup>C</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4 mb-4">
                <p className="display-5">
                  <span className="me-3"><i className="fa-solid fa-temperature-arrow-up"></i> {Math.round(weather.main.temp_max)}<sup>o</sup>C</span>
                  <span><i className="fa-solid fa-temperature-arrow-down"></i> {Math.round(weather.main.temp_min)}<sup>o</sup>C</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <h3 className="display-5"><i className="fa-solid fa-wind"></i> {weather.wind.speed}</h3>
              </div>
            </div>
          </div>
        </div> : <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );

}
*/

return(
<div>
<iframe src="//stream.crichd.vip/update/willowcricket.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>
</div>
);
}

export default App;

