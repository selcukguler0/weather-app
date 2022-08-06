import TurkeyMap from "turkey-map-react";
import { Tooltip } from "antd";
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
					cityWrapper={(cityComponent, cityData) => (
						<Tooltip
							title={`${cityData.plateNumber} - ${cityData.name}`}
							key={cityData.id}>
							{cityComponent}
						</Tooltip>
					)}
				/>
			</div>
		</div>
	);
}
