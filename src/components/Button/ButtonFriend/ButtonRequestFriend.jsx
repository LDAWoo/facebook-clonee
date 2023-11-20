import { NavLink } from "react-router-dom";
import routesConfig from "../../../configs/config";
import ButtonConfirm from "./ButtonConfirm";
import { useContext, useState } from "react";
import { GetFriendContext } from "../../Contexts/AppFriendProvider";
import { Avatar } from "antd";
import PropTypes from 'prop-types'
import MenuTippyHeadless from "../../TippyHeadless/TippyHeadlessCustom";

function ButtonRequestFriend({ data }) {
    const {handleReplyFriend} = useContext(GetFriendContext);
    const [isMouseEnter,setIsMouseEnter] = useState(false)
    const [isVisibleMutualFriends,setIsVisibleMutualFriends] = useState(false)

    const handleRequestClick = () =>{
        handleReplyFriend(data?.uid);
    }

    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }

    const handleMouseLeave = () =>{
        setIsMouseEnter(false)
    }

    const handleVisibleMutualFriends = () =>{
        setIsVisibleMutualFriends(true)
    }
    
    const handleUnVisibleMutualFriends = ()=>{
        setIsVisibleMutualFriends(false)
    }

    const RenderItem = () => {
        return (
            <div className="flex-col p-3 text-sm text-white dark:text-primary-500">
                <div>Nguyễn Thị Thu Trang</div>
                <div>Trường An</div>
                <div>Song Nguyễn</div>
                <div>Lê Trương Hoàng Nam</div>
                <div>Trần Thu Huyền</div>
            </div>
        );
    }

    return (
        <NavLink to={routesConfig.profile.replace(":uid",data?.uid)}>
            <div
                className={`flex w-full flex-grow items-center cursor-pointer duration-200 ${ !isMouseEnter && 'hover:bg-gray-100 hover:dark:bg-primary-500'} p-2 rounded-md`}
             
            >
                <div className="flex items-center justify-center">
                    <Avatar src={data?.photoURL} size={60}/>
                </div>
                <div className="flex-col ml-2 w-full space-y-1">
                    <div className="flex items-center justify-between">
                        <div className="font-medium dark:text-primary-50">
                            {data?.displayName}
                        </div>
                        <div className="text-gray-800 dark:text-primary-200 text-xs">1 tuần</div>
                    </div>

                    <div className="flex space-x-2">
                        <Avatar.Group maxCount={2}>
                            <Avatar size={18} src={data?.photoURL} className="border-none"/>
                            <Avatar size={18} src={data?.photoURL} className="border-none"/>
                        </Avatar.Group>
                        <MenuTippyHeadless 
                        width={300}
                        isVisible={isVisibleMutualFriends}
                        placement="bottom-start" 
                        backGroundColor="dark:bg-primary-50"
                        render={<RenderItem/>}
                        >
                            <div className="text-gray-700 text-xs dark:text-primary-200" onMouseEnter={handleVisibleMutualFriends} onMouseLeave={handleUnVisibleMutualFriends}>3 bạn chung</div>
                        </MenuTippyHeadless>
                    </div>
                    
                    <div className="flex gap-2">
                        <ButtonConfirm
                            fontText="font-medium"
                            typeButton="Confirm"
                            colorText="text-primary-50"
                            title="Xác nhận"
                            onClick={handleRequestClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}

                        />

                        <ButtonConfirm
                            fontText="font-medium"
                            colorText="text-gray-700 dark:text-primary-50"
                            typeButton="Delete"
                            title="Xóa"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
            </div>
        </NavLink>
    );
}
ButtonRequestFriend.propTypes={
    data: PropTypes.object
}

export default ButtonRequestFriend;
