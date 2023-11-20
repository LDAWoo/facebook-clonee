import PropTypes from "prop-types";

function ButtonRoundedMd({
  Icon,
  title,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) 
{
  return (
    <div 
    className="p-2 rounded-md w-full" 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
        <div>
            <Icon/>
        </div>
        <p>
            {title}
        </p>
    </div>
  )
}


ButtonRoundedMd.propTypes = {
    Icon: PropTypes.elementType,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  };

export default ButtonRoundedMd;
