import { HeaderImg } from "./HeaderImg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <HeaderImg />
    </div>
  );
};

export default Header;
