import React from "react";

const Profile = ({ data }) => {
	const { id, imgSrc, name, title, phone, email, detailsHref } = data;

	return (
		<div id={id} className="flex flex-col justify-center items-center max-w-xs">
			<img
				className="w-36 h-36 rounded-full object-cover"
				alt="profile_image"
				src={imgSrc}
			/>
			<h2 className="text-3xl">{name}</h2>
			<h3 className="text-xl">{title}</h3>
			<p>
				Telefonszám: <span>{phone}</span>
			</p>
			<p>
				E-mail: <span>{email}</span>
			</p>
			<p>
				<a href={detailsHref} role="button">
					Részletek»
				</a>
			</p>
		</div>
	);
};

export default Profile;
