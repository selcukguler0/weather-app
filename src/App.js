import { Link } from "react-router-dom";

export default function Main() {
	return (
		<section className="text-gray-600 body-font">
			<div className="max-w-5xl pt-40 pb-24 mx-auto">
				<h1 className="text-[80px] leading-[70px] text-center font-bold text-white mb-6">
					Get Weather Info <br />
					<span className="text-blue-500 underline hover:text-red-500">
						fast
					</span>{" "}
					and{" "}
					<span className="text-blue-500 underline hover:text-red-500">
						easy
					</span>
				</h1>
				<h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
					Weather Info
					<br />
					made with ReactJS and styled with Tailwind CSS
				</h2>
				<div className="flex justify-center gap-2">
					<Link to={"/map"}>
						<div className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline hover:from-blue-800 hover:to-blue-500">
							<div className="flex text-lg">
								<span className="justify-center">Map</span>
							</div>
						</div>
					</Link>
					<Link to={"/cities"}>
						<div className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline hover:from-blue-800 hover:to-blue-500">
							<div className="flex text-lg">
								<span className="justify-center">City List</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
