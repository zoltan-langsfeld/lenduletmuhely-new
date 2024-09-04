import React, { useState } from "react";
import Logo from "./Logo.jsx";

const MobileMenu = () => {
	const [expandMenu, setExpandMenu] = useState(false);

	const toggleMenu = () => {
		setExpandMenu(!expandMenu);
	};

	return (
		<div className="flex justify-between items-center bg-purple-800 relative">
			<Logo />
			<button type={"button"} onClick={toggleMenu} className="mr-4">
				<svg
					width=""
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>"menu_icon</title>
					<rect
						x="2.5"
						y="6"
						width="25"
						height="2"
						fill="white"
						rx="1"
						ry="1"
					/>
					<rect
						x="2.5"
						y="14"
						width="25"
						height="2"
						fill="white"
						rx="1"
						ry="1"
					/>
					<rect
						x="2.5"
						y="22"
						width="25"
						height="2"
						fill="white"
						rx="1"
						ry="1"
					/>
				</svg>
			</button>
			{expandMenu && (
				<div className="absolute w-full top-full bg-purple-800 flex flex-col p-4 pt-2 gap-3 ">
					<a href="/" className="text-white">
						Munkatársaink
					</a>
					<a href="/" className="text-white">
						Gyermek- és családterápia
					</a>
					<a href="/" className="text-white">
						Felnőtt- és párterápia
					</a>
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
			)}
		</div>
	);
};

export default MobileMenu;
