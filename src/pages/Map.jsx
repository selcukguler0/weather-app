import TurkeyMap from "turkey-map-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Map() {
	let navigate = useNavigate();
	return (
		<div>
			<Header />
			<div>
				<TurkeyMap
					onClick={({ name }) => {
						navigate(`/city/${name}`);
					}}
					showTooltip={true}
				/>
			</div>
		</div>
	);
}
