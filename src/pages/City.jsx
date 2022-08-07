import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cityList } from "../data/cities";
import Header from "../components/Header";
import { GridLoader } from "react-spinners"; //Loading animation
import "./city.css";
import "../open-weather-icons.scss";
import "../open-weather-icons.css";

export default function City() {
	const [loading, setLoading] = useState(true);
	const [weather, setWeather] = useState(null);
	const [weatherForecast, setWeatherForecast] = useState("");
	const weatherList = [];
	// get the city name from the url
	let cityParam = useParams();
	cityParam = cityParam.name;

	useEffect(() => {
		const getData = async () => {
			const currentCity = cityList.find((city) => city.name === cityParam);
			//current weather
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.latitude}&lon=${currentCity.longitude}&appid=84a749c58e6fab4e9af9329daaed536a&units=metric`
			); // fetch the weather from the openweathermap api
			const data = await response.json();
			setWeather(data);

			//forecast weather
			const response_forecast = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${currentCity.latitude}&lon=${currentCity.longitude}&units=metric&appid=84a749c58e6fab4e9af9329daaed536a`
			); // fetch the weather from the openweathermap api
			const data_forecast = await response_forecast.json();
			setWeatherForecast(data_forecast);

			setLoading(false);
		};
		getData();
	}, [cityParam]);


	if (loading || !weather || !weatherForecast) {
		return (
			<div className="flex justify-center items-center ">
				<GridLoader color="white" />
			</div>
		);
	}
	for (let index = 5; index < 22; index += 8) {
		weatherList.push({
			data: weatherForecast.list[index].dt_txt.split(" ")[0],
			temp: weatherForecast.list[index].main.temp,
			icon: weatherForecast.list[index].weather[0].icon
		});
	}
	return (
		<div className="flex items-center justify-center flex-col mt-4">
			<Header />
			<div className="container mt-[80px] h-[400px] w-[650px]">
				<div className="weather-side">
					<i className={"owi owi-" + weather.weather[0].icon}></i>
					<div className="weather-gradient"></div>
					<div className="date-container">
						<h2 className="date-dayname">
							{new Date().toLocaleDateString("tr-TR")}
						</h2>
						<span className="location">
							{`${cityParam}, ${weather.sys.country}`}
						</span>
					</div>

					<div className="weather-container">
						<i className="weather-icon" data-feather="sun"></i>
						<h1 className="weather-temp">{`${parseInt(
							weather.main.temp
						)}°C`}</h1>
						<h3 className="weather-desc">{`${weather.weather[0].main} - ${weather.weather[0].description}`}</h3>
					</div>
				</div>
				<div className="info-side">
					<div className="today-info-container">
						<div className="today-info">
							<div className="precipitation">
								{" "}
								<span className="title">Feels</span>
								{"  "}
								<span className="value">{`${parseInt(
									weather.main.feels_like
								)}°C`}</span>
								<div className="clear"></div>
							</div>
							<div className="humidity">
								{" "}
								<span className="title">HUMIDITY</span>
								<span className="value">{`${weather.main.humidity}%`}</span>
								<div className="clear"></div>
							</div>
							<div className="wind">
								{" "}
								<span className="title">WIND</span>
								<span className="value">{`${weather.wind.speed} km/h`}</span>
								<div className="clear"></div>
							</div>
							{/* ${new Date(1664000732 * 1000).toLocaleDateString()} */}
							<div className="wind">
								{" "}
								<span className="title">WIND DEG</span>
								<span className="value">{`${weather.wind.deg}°`}</span>
								<div className="clear"></div>
							</div>
							<div className="wind">
								{" "}
								<span className="title">SUNRISE</span>
								<span className="value">
									{`${new Date(weather.sys.sunrise * 1000).getHours()}.00 PM`}
								</span>
								<div className="clear"></div>
							</div>
							<div className="wind">
								{" "}
								<span className="title">SUNSET</span>
								<span className="value">
									{`${new Date(weather.sys.sunset * 1000).getHours()}.00 AM`}
								</span>
								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="week-container">
						<ul className="week-list">
							{/* forecast */}
							{weatherList.map((item, index) => (
								<li
									key={index}
									className={index === 1 ? "notactive" : "active"}>
									<i className={`forecast-owi owi-${item.icon}`}></i>
									<span className="date">{item.data}</span>
									<span className="day-temp">{`${item.temp}°C`}</span>
								</li>
							))}

							{/* <li>
							<i className="day-icon" data-feather="cloud-snow"></i>
							<span className="day-name">Thu</span>
							<span className="day-temp">08°C</span>
						</li>
						<li>
							<i className="day-icon" data-feather="cloud-rain"></i>
							<span className="day-name">Fry</span>
							<span className="day-temp">19°C</span>
						</li> */}
							<div className="clear"></div>
						</ul>
					</div>
					<div className="location-container">
						<button className="location-button">
							{" "}
							<i data-feather="map-pin"></i>
							<Link to="/map">Change location</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
