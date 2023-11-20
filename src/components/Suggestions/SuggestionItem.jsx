import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from "../Contexts/AppThemeProvider";
import { NavLink, useLocation } from "react-router-dom";
import ButtonRoundedFull from "../Button/ButtonRounded/ButtonRoundedFull";
import MenuTippyHeadless from "../TippyHeadless/TippyHeadlessCustom";

function SuggestionItem({ data, onClick, onChange, isChildren }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const location = useLocation();
  const ComponentItem = () => {
    return (
      <>
        <div
          className={`${
            data.options
              ? "flex-col cursor-text"
              : `${
                  data?.iconRight
                    ? "hover:bg-transparent"
                    : "flex-row hover:bg-gray-100 cursor-pointer hover:dark:bg-primary-500"
                } `
          }  flex relative p-[8px] items-center  rounded-lg justify-between duration-200 transition-all ease-in-out`}
          onClick={onClick}
        >
          <div
            className={`${
              data?.content ? "items-start" : "items-center"
            } flex space-x-3`}
          >
            {data?.icon && (
              <div
                className={`p-2 rounded-full dark:text-primary-50 ${
                  location.pathname === data?.to
                    ? "bg-fb-primary text-primary-50"
                    : "dark:bg-primary-400 bg-gray-300  text-gray-900"
                }`}
              >
                {data?.icon}
              </div>
            )}
            <div className="flex flex-col font-medium dark:text-primary-50">
              <p
                className={`text-[17px] ${
                  !data?.icon ? "text-[24px] font-bold" : "font-medium"
                }`}
              >
                {data?.title}
              </p>
              <p className="font-normal text-[15px] dark:text-primary-200">
                {data?.content}
              </p>
            </div>
          </div>

          {data?.iconRight && (
            <MenuTippyHeadless
              width={339}
              render={data?.data}
              isVisible={isVisible}
              backGroundColor="dark:bg-primary-600 shadow-2xl"
              placement="bottom-end"
            >
              <div>
                <ButtonRoundedFull
                  Icon={data?.iconRight}
                  isTippy={false}
                  isBackground={true}
                  active={isVisible}
                  size={38}
                  onClick={handleClick}
                />
              </div>
            </MenuTippyHeadless>
          )}
          {isChildren && (
            <IoIosArrowForward
              className=" text-gray-500 dark:text-primary-50"
              size={22}
            />
          )}
        </div>

        {data?.options?.map((option, index) => {
          const title = option?.title;
          const content = option?.content;

          return (
            <div
              key={index}
              className="flex relative p-[8px] cursor-pointer items-center hover:dark:bg-primary-500 hover:bg-gray-100 rounded-lg justify-between duration-200 ml-[45px] "
            >
              <div className="flex items-center justify-between flex-1">
                <div
                  className="flex flex-col justify-between dark:text-primary-50"
                  onClick={() => onChange(option?.props)}
                >
                  <p className="font-medium text-[15px] w-[250px]">{title}</p>
                  <p className="font-normal text-[12px] w-[250px] dark:text-primary-200">
                    {content}
                  </p>
                </div>
                <input
                  type="radio"
                  name="radio"
                  checked={isDarkMode === option?.props}
                  onChange={() => onChange(option?.props)}
                  className={`relative p-[6px] w-5 h-5 cursor-pointer appearance-none
                               rounded-full border-2 border-solid after:absolute after:z-[1] after:block checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.65rem] checked:after:w-[0.65rem] checked:after:rounded-full checked:after:border-primary checked:after:[transform:translate(-50%,-50%)]  
                               checked:after:absolute checked:after:bg-fb-primary ${
                                 isDarkMode == option?.props
                                   ? "border-blue-500"
                                   : "dark:border-neutral-600"
                               }`}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {data?.to ? (
        <NavLink to={data?.to}>
          <ComponentItem />
        </NavLink>
      ) : (
        <div>
          <ComponentItem />
        </div>
      )}
    </>
  );
}
SuggestionItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  isChildren: PropTypes.bool,
};

export default SuggestionItem;
