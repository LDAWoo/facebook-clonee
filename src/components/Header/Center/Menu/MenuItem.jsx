import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/AppThemeProvider";

function MenuItem({ icon, activeIcon, to, content }) {
  const location = useLocation();
  const isPathName = location.pathname.startsWith(to);
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Tippy
      delay={[500, 0]}
      content={content}
      className={`${
        isDarkMode === "dark"
          ? "bg-primary-50 text-primary-600"
          : "bg-primary-600"
      } text-gray-200 text-sm p-2 rounded-lg`}
    >
      <NavLink className={`bg-primary-50 dark:bg-primary-600`} to={to}>
        <div
          className={`items-center hidden min-sm:flex w-[50px] md:w-[80px] min-md:w-[100px] min-lg:w-[130px] justify-center rounded-xl h-12 ${
            location.pathname === to
              ? ""
              : "hover:bg-gray-100 hover:dark:bg-primary-400"
          }  `}
        >
          {location.pathname === to || (isPathName && to.length > 1) ? (
            <span className="text-fb-primary">{activeIcon}</span>
          ) : (
            <span className="dark:text-primary-200">{icon}</span>
          )}
        </div>
        {(location.pathname === to || (isPathName && to.length > 1)) && (
          <div className="border-b-4 border-b-blue-500 w-full" />
        )}
      </NavLink>
    </Tippy>
  );
}

MenuItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.node,
  activeIcon: PropTypes.bool,
  content: PropTypes.string,
};

export default MenuItem;
