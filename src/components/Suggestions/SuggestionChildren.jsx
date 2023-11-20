import PropTypes from 'prop-types'

function SuggestionChildren({Component,data,onBack}) {
    return ( 
        <div className="flex-col">
            <Component
                data={data}
                onBack={onBack}
            />
        </div>
     );
}

SuggestionChildren.propTypes ={
    Component: PropTypes.node.isRequired,
    data: PropTypes.object,
    onBack: PropTypes.func
}

export default SuggestionChildren;