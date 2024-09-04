import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

const NavBar = () => {
	return (
		<>
			<div className="hidden md:block">
				<DesktopMenu />
			</div>
			<div className="block md:hidden">
				<MobileMenu />
			</div>
		</>
	);
};

export default NavBar;
