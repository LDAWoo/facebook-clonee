import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function SidebarRow({ url, urlIcon, positionIcon, src, title, to }) {
  return (
    <NavLink to={to}>
      <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 hover:dark:bg-primary-400 rounded-lg cursor-pointer duration-200 ease-in-out">
        {src ? (
          <img
            className="rounded-full w-[34px] h-[34px] object-cover mr-1"
            src={src}
          />
        ) : (
          <div
            className={`text-fb-primary h-8 w-8  mr-[6px]`}
            style={{
              backgroundImage: `url(${urlIcon})`,
              backgroundPositionX: "0px",
              backgroundPositionY: positionIcon,
            }}
          >
            {url.length > 0 && <img src={url} alt={title} />}
          </div>
        )}
        <p className="font-medium dark:text-primary-50">{title}</p>
      </div>
    </NavLink>
  );
}

SidebarRow.propTypes = {
  url: PropTypes.string,
  urlIcon: PropTypes.string,
  positionIcon: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default SidebarRow;
