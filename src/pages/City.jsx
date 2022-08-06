import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cityList } from "../components/cities";
import Header from "../components/Header";
import { GridLoader } from "react-spinners"; //Loading animation
import "./city.css";

export default function City() {
	const [loading, setLoading] = useState(true);
	const [weather, setWeather] = useState(null);

	// get the city name from the url
	let cityParam = useParams();
	cityParam = cityParam.name;

	useEffect(() => {
		const getData = async () => {
			const currentCity = cityList.find(
				(city) => city.name === cityParam
			);
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.latitude}&lon=${currentCity.longitude}&appid=84a749c58e6fab4e9af9329daaed536a&units=metric`
			); // fetch the weather from the openweathermap api
			const data = await response.json();
			setWeather(data);
			setLoading(false);
		};
		getData();
	}, [cityParam]);

	if (loading || !weather) {
		return (
			<div className="flex justify-center items-center ">
				<GridLoader color="white" />
			</div>
		);
	}
	return (
		<div className="flex items-center justify-center flex-col mt-4">
			<Header />
			<div className="container mt-[80px] h-[400px] w-[600px]">
				<div className="weather-side">
					<div className="weather-gradient"></div>
					<div className="date-container">
						<h2 className="date-dayname">
							{new Date().toLocaleDateString("tr-TR")}
						</h2>
						<span className="location">{`${cityParam}, ${weather.sys.country}`}</span>
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
							<li className="active">
								<i className="day-icon" data-feather="sun"></i>
								<span className="day-name">Min Temp</span>
								<span className="day-temp">{`${weather.main.temp_min}°C`}</span>
							</li>
							<li>
								<i className="day-icon" data-feather="cloud"></i>
								<span className="day-name">Max Temp</span>
								<span className="day-temp">{`${weather.main.temp_max}°C`}</span>
							</li>
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
							<Link to="/cities">Change location</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}