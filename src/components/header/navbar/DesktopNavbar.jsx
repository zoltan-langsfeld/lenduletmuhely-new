import React, { useState } from "react";
import Logo from "../Logo.jsx";

const DesktopNavbar = () => {
	const [showServices, setShowServices] = useState(false);

	const toggleServices = () => {
		setShowServices(!showServices);
	};

	return (
		<div className="flex justify-start items-center gap-10 bg-purple-800">
			<Logo />
			<div className="flex items-center gap-4">
				<a href="/" className="text-white">
					Munkatársaink
				</a>
				<div className="relative flex-none">
					<button
						type={"button"}
						onClick={toggleServices}
						className="text-white"
					>
						Szolgáltatások
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5 inline-block ml-1"
						>
							<title>"chevron_down</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
					{showServices && (
						<div className="absolute rounded-b top-full w-60 mt-2 p-4  bg-purple-800 shadow-lg flex flex-col gap-2">
							<a href="/" className="text-white">
								Gyermek- és családterápia
							</a>
							<a href="/" className="text-white">
								Felnőtt- és párterápia
							</a>
						</div>
					)}
				</div>

				<a href="/" className="text-white">
					Áraink
				</a>
				<a href="/" className="text-white">
					Galéria
				</a>
				<a href="/" className="text-white">
					Rólunk
				</a>
				<a href="/" className="text-white">
					Kapcsolat
				</a>
			</div>
		</div>
	);
};

export default DesktopNavbar;
