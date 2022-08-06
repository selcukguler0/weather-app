import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import City from "./pages/City";
import Cities from "./pages/Cities";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<a
			id="github"
			href="https://github.com/selcukguler0/weather-app"
			target="_blank"
			rel="noreferrer">
			<img
				src="/githubLogo.png"
				alt="github-logo"
				className="m-5 sticky text-white"
			/>
		</a>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/map" element={<Map />} />
				<Route path="/city/:name" element={<City />} />
				<Route path="/cities" element={<Cities />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);