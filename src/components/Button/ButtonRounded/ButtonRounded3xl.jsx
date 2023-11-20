import PropTypes from 'prop-types'

function ButtonRounded3xl({title, active}) {
    return ( 
        <div className={`flex items-center justify-center  rounded-3xl hover:bg-gray-200 hover:dark:bg-primary-500 cursor-pointer h-9 pl-3 pr-3
        ${active ? "bg-gray-100 dark:bg-fb-primary1 hover:dark:bg-fb-primary2" : ""}
        `}>
            <p className={`font-medium text-md  ${active ? "text-fb-primary" : "dark:text-primary-100"} `}>{title}</p>
        </div>
     );
}

ButtonRounded3xl.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
}

export default ButtonRounded3xl;