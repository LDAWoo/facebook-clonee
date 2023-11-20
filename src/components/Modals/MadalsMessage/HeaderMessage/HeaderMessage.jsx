import Tippy from "@tippyjs/react";
import { Avatar } from "antd";
import {MdKeyboardArrowDown,MdVideocam} from 'react-icons/md'
import {AiOutlineMinus,AiOutlineClose} from 'react-icons/ai'
import {BsTelephoneFill} from 'react-icons/bs'
import { useContext, useEffect, useState } from "react";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import { MessageContext } from "../../../Contexts/AppMessageProvider";
import { NavLink } from "react-router-dom";
import routesConfig from "../../../../configs/config";

function HeaderMessage({data,isMinimizeMessage}) {
    
    const [isHover,setIsHover] = useState({
        avatar: false,
        settingUser: false
        })

        const handleMouseEnter = (type) =>{
            setIsHover((prev) => ({...prev,[type]:true}))
        }

        const handleMouseLeave = (type) =>{
            setIsHover((prev) => ({...prev,[type]:false}))
        }

    // const userConversations = allFriends.map(friend => {
        
    // })



    // const[imageURL,setImageURL] = useState(userConversation[0].photoURL)


    const handleMinimizeMessage = () =>{
        
    }

    const handleCloseMessage = () =>{

    }

    // useEffect(() => {
    //     async function checkAndSetImageURL() {
    //       const isValidURL = await checkImageURL(userConversation[0]?.photoURL);
    //       if (isValidURL) {
    //         setImageURL(userConversation[0]?.photoURL);
    //       } else {
    //         setImageURL(defaultImage);
    //       }
    //     }
    
    //     checkAndSetImageURL();
    //   }, [userConversation]);
    

    const colorTopic = "text-fb-primary"
    return ( 
        <div className="flex items-center relative z-2 p-1 rounded-tl-md rounded-tr-md border-b-[1px] border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between flex-grow">
                <Tippy 
                delay={[1000, 0]}
                content="Cài đặt chat"
                placement="top"
                className="text-gray-300 dark:bg-primary-50 text-sm p-1 rounded-md"
                >
                    <div className={`flex items-center rounded-md ${isHover.settingUser && !isHover.avatar && 'hover:bg-gray-100 hover:dark:bg-primary-500'} cursor-pointer flex-nowrap duration-200`}
                    onMouseEnter={() => handleMouseEnter("settingUser")}
                    onMouseLeave={() => handleMouseLeave("settingUser")}
                    >
                        <NavLink 
                        to={routesConfig.profile.replace(":uid",data[0]?.uid)}
                        className={`rounded-md ${isHover.avatar && 'hover:bg-gray-100 hover:dark:bg-primary-500'} cursor-pointer p-[6px] duration-200`} 
                        onMouseEnter={() => handleMouseEnter("avatar")}
                        onMouseLeave={() => handleMouseLeave("avatar")}
                        >
                            <Avatar
                            size={32}
                            src={data[0]?.photoURL}
                            />
                        </NavLink>
                        <div className="flex-col"  
                        >
                            <div className="font-medium dark:text-primary-50"  

                            style={{fontSize: '15px', display: '-webkit-box', 
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden', 
                            textOverflow:'ellipsis' }}>
                                {data[0]?.displayName}
                                </div>

                            <div className="text-gray-700 dark:text-primary-200"

                            style={{fontSize: '13px', display: '-webkit-box', 
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' }}
                            
                            >Hoạt động 1 giờ trước</div>
                        </div>
                        <div className="ml-2 text-fb-primary">
                            <MdKeyboardArrowDown size={20}/>
                        </div>
                    </div>
                </Tippy>

                <div>
                    <div className="flex items-center"> 
                        <ButtonRoundedFull 
                        Icon={<BsTelephoneFill size={15}/>}
                        iconColor={colorTopic}
                        content="Bắt đầu gọi thoại"
                        placement="top"
                        size={30}
                        />
                        <ButtonRoundedFull 
                        Icon={<MdVideocam size={20}/>}
                        iconColor={colorTopic}
                        content="Bắt đầu gọi video"
                        placement="top"
                        size={30}
                        />
                        <ButtonRoundedFull 
                        Icon={<AiOutlineMinus size={20}/>}
                        iconColor={colorTopic}
                        content="Thu nhỏ đoạn chat"
                        placement="top"
                        size={30}
                        onClick={handleMinimizeMessage}
                        />
                        <ButtonRoundedFull 
                        Icon={<AiOutlineClose size={20}/>}
                        iconColor={colorTopic}
                        content="Đóng đoạt chat"
                        placement="top"
                        size={30}
                        onClick={handleCloseMessage}
                        />
                    </div>
                </div>
            </div>



        </div>
     );
}

export default HeaderMessage;