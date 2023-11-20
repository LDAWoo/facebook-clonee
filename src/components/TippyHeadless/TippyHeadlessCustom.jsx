import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";
import PopperWrapper from "./PopperWrapper";

function MenuTippyHeadless({ children, render, onClickOutside, items = [], width = 0, backGroundColor, isVisible, placement, onBlur }) {
  const [menuHeight, setMenuHeight] = useState(window.innerHeight * 0.8);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const newMenuHeight = windowHeight * 0.8;
      setMenuHeight(newMenuHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  const renderItems = () => {
    const element = items?.map((item, index) => <div key={index}>{item}</div>);
    return element;
  };

  const renderResult = (attrs) => (
    <div className="flex-col " tabIndex={-1} {...attrs} onBlur={onBlur}>
      <div className={`flex items-center overflow-x-hidden overflow-y-auto dark:scrollbar rounded-md scroll-smooth ${backGroundColor}`}>
        <PopperWrapper className style={{ maxHeight: menuHeight, width: width }}>
          {render ? render : renderItems()}
        </PopperWrapper>
      </div>
    </div>
  );
  return (
    <div>
      <Tippy interactive visible={isVisible} onClickOutside={onClickOutside} render={renderResult || render} placement={placement}>
        {children}
      </Tippy>
    </div>
  );
}

MenuTippyHeadless.propTypes = {
  children: PropTypes.node,
  render: PropTypes.array,
  items: PropTypes.array,
  width: PropTypes.number,
  backGroundColor: PropTypes.string,
  isVisible: PropTypes.bool,
  onClickOutside: PropTypes.func,
  placement: PropTypes.string,
  onBlur: PropTypes.func,
};

export default MenuTippyHeadless;
