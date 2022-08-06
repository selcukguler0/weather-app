import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
	console.log(location.pathname.includes("map"));
	return (
		<header className="flex justify-center mt-8 mb-5 m-auto gap-x-4">
			<Link
				className="text-[40px] leading-[70px] text-center font-bold text-blue-500 hover:text-red-500"
				to={"/"}>
				Home
			</Link>
			<Link
				className={
					"text-[40px] leading-[70px] text-center font-bold " +
					(location.pathname.includes("map")
						? "text-white"
						: "text-blue-500 hover:text-red-500")
				}
				to={"/map"}>
				Map
			</Link>
			<Link
				className={
					"text-[40px] leading-[70px] text-center font-bold " +
					(location.pathname.includes("cities")
						? "text-white"
						: "text-blue-500 hover:text-red-500")
				}
				to={"/cities"}>
				Cities
			</Link>
		</header>
	);
}
