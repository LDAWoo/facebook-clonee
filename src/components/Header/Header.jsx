import ModalsMessage from "../Modals/MadalsMessage/ModalsMessage";
import Menu from "./Center/Menu/Menu";
import HeaderLeft from "./Left/HeaderLeft";
import HeaderRight from "./Right/HeaderRight";

function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-white dark:bg-primary-600 flex
        items-center px-4 shadow-md h-14"
    >
      {/* Left */}
      <HeaderLeft />

      {/* Center */}
      <Menu />

      {/* Right */}
      <HeaderRight />
      <ModalsMessage />
    </div>
  );
}

export default Header;
