import DesktopNavbar from "./navbar/DesktopNavbar.jsx";
import MobileNavbar from "./navbar/MobileNavbar.jsx";

const Header = () => {
	return (
		<>
			<div className="hidden md:block">
				<DesktopNavbar />
			</div>
			<div className="block md:hidden">
				<MobileNavbar />
			</div>
		</>
	);
};

export default Header;
