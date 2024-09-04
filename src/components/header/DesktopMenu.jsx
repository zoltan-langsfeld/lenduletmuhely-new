import React, { useState } from "react";
import Logo from "./Logo.jsx";

const DesktopMenu = () => {
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
				<div className="relative">
					<button
						type={"button"}
						onClick={toggleServices}
						className="text-white"
					>
						Szolgáltatások
					</button>
					{showServices && (
						<div className="absolute top-full w-60 mt-2 p-4 rounded bg-purple-800 shadow-lg flex flex-col gap-2">
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

export default DesktopMenu;
