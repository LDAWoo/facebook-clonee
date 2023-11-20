import PropTypes from 'prop-types';

function ButtonConfirm({ Icon, title, colorText, colorIcon, fontText, onClick,onMouseEnter,onMouseLeave, isVisibility, typeButton }) {
    const buttonStyles = {
        Add: {
            backgroundColor: "bg-secondary-50 dark:bg-fb-primary1",
            hoverBackgroundColor: "hover:bg-secondary-100 hover:dark:bg-fb-primary2",
        },
        Confirm: {
            backgroundColor: "bg-blue-700",
            hoverBackgroundColor: "hover:bg-blue-600",
        },
        Message: {
            backgroundColor: "bg-secondary-100 dark:bg-primary-500",
            hoverBackgroundColor: "hover:bg-gray-300 hover:dark:bg-primary-400",
        },
        Delete: {
            backgroundColor: "bg-secondary-100 dark:bg-primary-400",
            hoverBackgroundColor: "hover:bg-gray-300 hover:dark:bg-primary-300",
        },
        

    };

    const { backgroundColor, hoverBackgroundColor } = buttonStyles[typeButton] || {};

    return (
        <div className={`w-full text-center cursor-pointer duration-200 rounded-md p-[6px] ${backgroundColor} ${hoverBackgroundColor}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ visibility: `${isVisibility ? 'hidden' : ''}` }}>
            <div className={`${Icon ? `flex items-center justify-center` : ''} ${title ? 'space-x-2' : ''}`}>
                {Icon && <Icon size={20} className={`mb-1 ${colorIcon}`} />}
                <p className={`${colorText} ${fontText}`}>{title}</p>
            </div>
        </div>
    );
}

ButtonConfirm.propTypes = {
    Icon: PropTypes.elementType,
    title: PropTypes.string,
    colorText: PropTypes.string,
    colorIcon: PropTypes.string,
    fontText: PropTypes.string,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    isVisibility: PropTypes.bool,
    typeButton: PropTypes.oneOf(['Add', 'Confirm', 'Message', 'Delete']).isRequired,
};

export default ButtonConfirm;
