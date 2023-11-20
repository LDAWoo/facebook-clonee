import PropTypes from 'prop-types';

function PopperWrapper({children,className,style}) {
    return ( 
        <div className={className}
        style={style}
        >
            {children}
        </div>
     );
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
}

export default PopperWrapper;