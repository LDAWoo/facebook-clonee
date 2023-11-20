import PropTypes from 'prop-types'

function PositionFixed({children,top,left,bottom,right, className}) {
    return ( 
            <div className={` ${className}`}>
                <div className={`fixed z-0 max-w[360px] min-w-[280px] flex-shrink-[9999] overflow-x-hidden overflow-y-hidden box-border ${top} ${left} ${bottom} ${right}`}>
                    <div className='flex flex-col flex-shrink basis-full z-0  will-change-transform relative flex-grow min-h-0 overflow-x-hidden overflow-y-hidden hover:overflow-y-auto hover:scrollbarCustom h-[calc(100vh_-_56px)]'>
                        {children}
                    </div>
                </div>
                
            </div>
      
        );
}

PositionFixed.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    bottom: PropTypes.string,
    right: PropTypes.string,
}

export default PositionFixed;