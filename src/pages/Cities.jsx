import { Link } from 'react-router-dom';
import { cityList } from "../components/cities"
import Header from "../components/Header";
import GridLoader from "react-spinners/GridLoader";

export default function Cities() {
	if (!cityList) {
		return (
			<div className="flex justify-center items-center ">
				<GridLoader color="white" />
			</div>
		);
	}
	return (
		<div className="flex justify-center items-center flex-col mx-24">
			<Header />
			<div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 ">
				{cityList.map((city) => (
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
