import { useContext } from "react";
import BodyMessage from "./BodyMessage/BodyMessage";
import FooterMessage from "./FooterMessage/FooterMessage";
import HeaderMessage from "./HeaderMessage/HeaderMessage";
import NoInternet from "./NoInternet/NoInternet";
import { AppContext } from "../../Contexts/AppProvider";
import PropTyeps from 'prop-types'
import { MessageContext } from "../../Contexts/AppMessageProvider";


function MessageCustom({conversationId, isMinimizeMessage,tabIndex,onBlur}) {
    const {isOnline} = useContext(AppContext)
    const {sortedConversationFilteredAllFriends} = useContext(MessageContext)
    const getFriendConversation = sortedConversationFilteredAllFriends.filter(friend => {
        return friend?.conversationsId?.includes(conversationId)
    })

    return ( 
        <div 
        className="flex ml-3 rounded-tl-md rounded-tr-md shadow-md bg-white dark:bg-primary-600 h-[455px]"
        tabIndex={tabIndex}
        onBlur={onBlur}
        >
            <div className="flex flex-col rounded-tl-2 rounded-tr-2 w-[328px] h-[455px]">
                <div className="flex-1">
                    <HeaderMessage data={getFriendConversation} isMinimizeMessage={isMinimizeMessage}/>
                    {
                        !isOnline && <NoInternet/>
                    }
                    <BodyMessage data={getFriendConversation}/>
                </div>
                <div className="flex-shrink-0">
                <FooterMessage dataMessage={getFriendConversation} />
                </div>
            </div>
        </div>
     );
}

export default MessageCustom;