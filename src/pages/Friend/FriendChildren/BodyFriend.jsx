import PropTypes from 'prop-types'

function BodyFriend({data,Button}) {
    return ( 
        <div className="ml-0 space-y-2">
            {
                data && (
                    data.map((data,index) =>(
                        <Button 
                        key={index} 
                        data={data}
                        />
                    ))
                )
            }
        </div>
     );
}

BodyFriend.propTypes = {
    data: PropTypes.array,
    Button: PropTypes.elementType
}
export default BodyFriend;