import PropTypes from "prop-types";

function HeaderButtonActive({ Icon, title, active, handleClick }) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer w-full h-14
        ${active ? "text-blue-500 border-b-4 border-b-blue-500" : "border-transparent hover:bg-gray-100 rounded-xl dark:hover:bg-primary-500 text-gray-600 dark:text-primary-50 duration-200"} `}
      onClick={handleClick}
    >
      <div>{Icon}</div>
      <p className="ml-3 font-medium ">{title}</p>
    </div>
  );
}

HeaderButtonActive.propTypes = {
  Icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default HeaderButtonActive;
