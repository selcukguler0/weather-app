import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cityList } from "../data/cities"
import Header from "../components/Header";
import GridLoader from "react-spinners/GridLoader";

export default function Cities() {
	const [cities, setCities] = useState(cityList);
	const [searchInput, setSearchInput] = useState("");
	if (!cityList) {
		return (
			<div className="flex justify-center items-center ">
				<GridLoader color="white" />
			</div>
		);
	}

	const search = (e) => {
		setSearchInput(e.target.value);
		// using toLocaleLowerCase to make the search case insensitive and sensitive for Turkish characters
		const searchTerm = e.target.value.toLocaleLowerCase("tr");
		const filteredCities = cityList.filter((city) =>
			city.name.toLocaleLowerCase("tr").includes(searchTerm)
		);
		setCities(filteredCities);
	}

	return (
		<div className="flex justify-center items-center flex-col mx-24">
			<Header />
			<input
				value={searchInput}
				className="m-5 bg-transparent border-blue-500 border-2 rounded-lg py-2 px-4 text-white"
				onChange={search}
				placeholder="Search City"></input>
			<div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 ">
				{cities.map((city) => (
					<Link
						className="flex items-center justify-center rounded-md py-3 font-semibold tracking-tighter text-white bg-gradient-to-r from-red-500 to-red-800 px-14 text-md focus:shadow-outline hover:from-blue-800 hover:to-blue-500"
						style={{ flexBasis: "20%" }}
						to={`/city/${city.name}`}
						key={city.id}>
						{city.name}
					</Link>
				))}
			</div>
		</div>
	);
	

}
