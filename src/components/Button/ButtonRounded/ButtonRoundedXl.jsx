import PropTypes from 'prop-types'

function ButtonRoundedXl({ Icon,active }) {

    return ( 
        <div 
        className="flex cursor-pointer items-center lg:px-10 md:px-5 sm:h-14
        md:hover:bg-gray-100 rounded-xl
        active:border-b-2 active:border-blue-500 group
        ">
            <Icon style={{fontSize: 26}} className={`h-5 text-center sm:h-7 mx-auto
             group-hover:text-blue-500 ${
                active ? "text-blue-500" : "text-gray-500"
            }`}/>
        </div>
     );
}

ButtonRoundedXl.propTypes = {
    Icon: PropTypes.node.isRequired,
    active: PropTypes.bool
}

export default ButtonRoundedXl;