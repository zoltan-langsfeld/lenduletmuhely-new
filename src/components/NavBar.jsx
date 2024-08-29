import React, { useState } from "react";

const Profile = () => {
	const [showServices, setShowServices] = useState(false);

	const toggleServices = () => {
		setShowServices(!showServices);
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log("clicked");
	};

	return (
		<div className="flex items-center gap-2">
			<h1>Lendület Műhely</h1>
			<h3>Munkatársaink</h3>
			<button type={"button"} onClick={toggleServices}>
				Szolgáltatások
			</button>
			{showServices && (
				<div className="mt-4 p-4 border rounded bg-gray-100">
					<p>Here are our services...</p>
				</div>
			)}
			<h3>Áraink</h3>
			<h3>Galéria</h3>
			<h3>Rólunk</h3>
			<h3>Kapcsolat</h3>
		</div>
	);
};

export default Profile;
