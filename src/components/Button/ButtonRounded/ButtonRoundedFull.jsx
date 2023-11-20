import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/AppThemeProvider";

function ButtonRoundedFull({
  Icon,
  isTippy = true,
  isBackground = false,
  backGroundColor = [{ isBg: false, color: "" }],
  iconColor,
  content,
  placement,
  active,
  number,
  size = 12,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  function Button() {
    return (
      <div className="relative">
        <div
            className={`flex items-center  ${
              isBackground ? backGroundColor.isBg ? backGroundColor.color : active ? "hover:dark:bg-fb-primary2 dark:bg-fb-primary1  " : "hover:dark:bg-primary-300 dark:bg-primary-500" : " hover:dark:bg-primary-300 bg-transparent"
            } justify-center text-gray-700 duration-200 hover:bg-gray-200 bg-gray-100
                    rounded-full cursor-pointer`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ width: size, height: size }}
        >
          <div
            className={`${
              active ? "text-blue-700" : "text-gray-900 dark:text-primary-50"
            }`}
          >
            {Icon}
          </div>
        </div>
        {number > 0 && (
          <span className="absolute flex items-center justify-center text-xs font-medium text-white -top-1 -right-1 w-5 h-5 bg-red-800 rounded-full">
            {number}
          </span>
        )}
      </div>
    );
  }

  const ButtonTippy = () => {
    const{isDarkMode} = useContext(ThemeContext)

    return (
      <Tippy
        key={active ? "dark" : "light"}
        delay={[500, 0]}
        content={content}
        placement={placement}
        className={`${isDarkMode ==="dark" ? 'bg-primary-50 text-primary-600' : 'bg-primary-600'} text-gray-200 text-sm p-2 rounded-lg`}
        
      >
        <div className="relative">
          <div
            className={`flex items-center  ${
              isBackground ? backGroundColor.isBg ? backGroundColor.color : active ? "hover:dark:bg-fb-primary2 dark:bg-fb-primary1  " : "hover:dark:bg-primary-300 dark:bg-primary-500" : " hover:dark:bg-primary-300 bg-transparent"
            } justify-center text-gray-700 duration-200 hover:bg-gray-200 bg-gray-100
                    rounded-full cursor-pointer`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ width: size, height: size }}
          >
            <div className={`${active ? "text-fb-primary" : `${iconColor ? iconColor : 'text-gray-900 dark:text-primary-100'}`}`}>
              {Icon}
            </div>
          </div>
          {number > 0 && (
            <span className="absolute flex items-center justify-center text-xs font-medium text-white -top-1 -right-1 w-5 h-5 bg-red-800 rounded-full">
              {number}
            </span>
          )}
        </div>
      </Tippy>
    );
  };

  return <>{isTippy ? <ButtonTippy /> : <Button />}</>;
}

ButtonRoundedFull.propTypes = {
   Icon: PropTypes.object,
  isTippy: PropTypes.bool,
  backGroundColor: PropTypes.object,
  isBackground: PropTypes.bool,
  iconColor: PropTypes.string,
  content: PropTypes.string,
  placement: PropTypes.string,
  active: PropTypes.bool,
  number: PropTypes.number,
  size: PropTypes.number,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default ButtonRoundedFull;
