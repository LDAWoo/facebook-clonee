
import { useContext, useEffect, useRef, useState } from "react";
import FooterMessage from "../FooterMessage/FooterMessage";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";
import MessageTime from "./MessageTime";
import MessageLoading from './MessageLoading'
import {defaultImage} from '../../../Images/DefaultImage'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AppContext } from "../../../Contexts/AppProvider";
import { MessageContext } from "../../../Contexts/AppMessageProvider";
import { Avatar } from "antd";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";


function BodyMessage({ data }) {
    const { user } = useContext(AppContext);
    const displayName = user[0]?.displayName;
    const uid = user[0]?.uid;

    const {
        heightBodyMessage,
        isMinimizeMessage,
        isTippyVisible,
        dataBodyMessage,
        setDataBodyMessage,
        sortedConversationFilteredAllFriends
    } = useContext(MessageContext);
    const [imageURL, setImageURL] = useState()

    


    const dataMessage = data[0]?.messages;




    // useEffect(() =>{
    //     async function checkAndSetImageURL() {
    //         const isValidURL = await checkImageURL(userConversation[0]?.photoURL);
    //         if (isValidURL) {
    //           setImageURL(userConversation[0]?.photoURL);
    //         } else {
    //           setImageURL(defaultImage);
    //         }
    //       }

    //     checkAndSetImageURL();

    // },[userConversation])

    const [isVisibleArrow, setIsVisibleArrow] = useState(false);
    const scrollRef = useRef();
    const scrollElement = scrollRef.current;

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue =
                scrollRef.current.scrollHeight -
                scrollRef.current.clientHeight -
                scrollRef.current.scrollTop;
            scrollValue >= 100 ? setIsVisibleArrow(true) : setIsVisibleArrow(false);
        };

        if (scrollElement) {
            scrollElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    // useEffect(() =>{
    //     handleSetValueScroll();
    // },[dataMessage])

    useEffect(() => {
        // Set scroll to the bottom on initial render
        handleSetValueScroll();
    }, []);

    const handleSetValueScroll = () => {
        if (scrollElement) {
            scrollElement.scrollTop = scrollElement?.scrollHeight;
        }
    };

    useEffect(() => {
        if (scrollElement) {
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [
        scrollElement,
        heightBodyMessage,

        isMinimizeMessage,
        !isTippyVisible.message,
    ]);


    return (
        <div className="flex flex-col  min-h-0 relative flex-grow max-w-full " >
            <div className="flex flex-col flex-1 ">
                <div
                    className="flex flex-grow relative flex-col overflow-y-hidden overflow-x-hidden max-h-full
                    
                    "
                //style={{backgroundImage: 'linear-gradient(rgb(255, 13, 158), rgb(249, 0, 90))'}}
                >
                    <div className="flex flex-col overflow-x-hidden flex-grow overflow-y-hidden">
                        <div className="flex min-h-0 relative z-0 overflow-y-hidden overflow-x-hidden flex-shrink min-w-0 flex-col basis-auto isolate box-border">
                            <div className="flex-col flex-shrink isolate flex overflow-x-hidden z-0 flex-grow overflow-y-hidden">
                                <div className="flex flex-col relative flex-grow overflow-x-hidden overflow-y-hidden">
                                    
                                    <div ref={scrollRef} className={`flex-shrink w-full flex-col flex overflow-x-hidden h-auto overflow-y-auto dark:scrollbar scroll-smooth `}
                                     style={{ height: '307px' }}
                                    >
                                        <MessageLoading />

                                        <div className="flex flex-col w-full items-center justify-center pt-5 pl-3 pr-3 pb-3">
                                            
                                            <div className="flex flex-col w-full items-center justify-center gap-1">
                                                <Avatar 
                                                src={data[0]?.photoURL}
                                                size={62}/>
                                                <div className="text-[17px] dark:text-primary-50">{data[0]?.displayName}</div>
                                                <div className="text-[13px] text-primary-300 dark:text-primary-200">Facebook</div>
                                                <div className="text-[13px] text-primary-300 dark:text-primary-200">Các bạn là bạn bè trên Facebook</div>
                                                <div className="text-[13px] text-primary-300 dark:text-primary-200">Làm việc tại Thành Phố Hồ Chí Minh</div>
                                            </div>
                                        </div>
                                        

                                        <div>
                                            <div className="relative block">
                                                <MessageTime />
                                                {
                                                    dataMessage?.map((message,index) => (
                                                        message.uid === uid
                                                        ?
                                                        <MessageRight key={index} data={message} isBackground={message.background} displayName={displayName}/>
                                                        :
                                                        <MessageLeft key={index} data={message} isBackground={message.background} displayName={displayName} photoURL={imageURL} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isVisibleArrow && 
                <div className="flex relative justify-center items-center">
                    <div className="flex absolute bottom-0  z-2 "
                    >
                       <ButtonRoundedFull
                        size={40}
                        isBackground
                        isTippy={false}
                        Icon={<AiOutlineArrowDown />}
                        onClick={handleSetValueScroll}
                        />
                    </div>
                </div>}

            </div>

            
        </div>
    );
}

export default BodyMessage;