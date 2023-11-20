import MenuItem from "./MenuItem";
import { DataMenu } from "../../../constants/DataMenu";
import { OptionIcon } from "../../../icons/icons";
import { useEffect, useState } from "react";

function Menu() {
  const [menuResize, setMenuResize] = useState(DataMenu || []);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    const handleResizeWidth = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth < 1100) {
        setMenuResize(menuResize.slice(0, 4));
      } else {
        setMenuResize(menuResize);
      }
    };

    window.addEventListener("resize", handleResizeWidth);

    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);

  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="flex rounded-lg">
        <div className="flex gap-1 ">
          {menuResize.map((menuItem, index) => (
            <div key={index}>
              <MenuItem
                key={menuItem.id}
                to={menuItem.to}
                icon={menuItem.icon}
                activeIcon={menuItem.activeIcon}
                content={menuItem.name}
              />
            </div>
          ))}
          {windowWidth < 1100 && (
            <MenuItem to="/more" icon={<OptionIcon />} content="Xem thêm" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
