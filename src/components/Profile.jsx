import React from "react";

const Profile = ({ data }) => {
	const { id, imgSrc, name, title, phone, email, detailsHref } = data;

	return (
		<div id={id}>
			<img alt="image" src={imgSrc} />
			<h2>{name}</h2>
			<p>{title}</p>
			<p>
				Telefonszám: <span>{phone}</span> <br />
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
