import Search from "../../pages/Friend/FriendRequest/Search/Search";
import BodyFriend from "../../pages/Friend/FriendChildren/BodyFriend";
import PropTypes from 'prop-types'

function SuggestionFriend({Component, data, onBack,link}) {
    console.log(data);
  return ( 
        <div className="flex-col">
            <Component
            data={data}
            onBack={onBack}
            link={link}
            />
            <div className="flex flex-col items center overflow-y-auto space-y-2 h-[calc(100vh_-_150px)]">
              {data.search && <Search data={data.search}/>}
              <div className="border-t-[1px] border-gray-300 dark:border-gray-600 "/>
              <BodyFriend data={data?.data} Button={data?.button}/>
            </div>
        </div>
     );
}

SuggestionFriend.propTypes = {
  Component: PropTypes.elementType.isRequired,
  data: PropTypes.shape({
    search: PropTypes.object,
    data: PropTypes.array,
    button: PropTypes.elementType,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default SuggestionFriend;