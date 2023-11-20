import {PiNotePencilFill} from 'react-icons/pi'
import MessageCustom from "./MessageCustom";
import { useContext, useState } from "react";
import { MessageContext } from "../../Contexts/AppMessageProvider";
import ButtonRoundedFull from "../../Button/ButtonRounded/ButtonRoundedFull";
import { SlOptions } from "react-icons/sl";

function ModalsMessage() {
    const {
      dataModalsMessage,
    } = useContext(MessageContext);

    const [isVisibleOption, setIsVisibleOption] = useState(false)

    const handleBlur = (conversationsId) => {
    }

    const handleMouseEnter = () => {
      setIsVisibleOption(true)
    }

    const handleMouseLeave = () =>{
      setIsVisibleOption(false)
    }
    return (
      <div className="fixed right-0 bottom-0" >
        <div className="flex items-end isolate">
          { (
            <div className="flex fixed z-50 right-20">
              {dataModalsMessage?.map((conversationId,index) => 
                (
                <MessageCustom
                  key={index} 
                  conversationId={conversationId}
                  tabIndex={-1} 
                  onBlur={() => handleBlur(conversationId)}
                />
              )
              )} 
            </div>
          )}

          <div className="flex fixed z-50 right-20">
                  <div className="absolute -right-14 bottom-4">
                      <div className="flex flex-col space-y-2" 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      > 
                        <div className="flex items-center justify-center">
                            <div className={` duration-500
                            ${isVisibleOption ? 'scale-100' : 'scale-0'}
                            `}>
                                <ButtonRoundedFull 
                                Icon={<SlOptions size={20}/>}
                                iconColor="dark:text-primary-50"
                                backGroundColor={{isBg: true, color: "bg-white shadow-xl dark:bg-primary-500 hover:dark:bg-primary-400"}}
                                isBackground
                                content="Tùy chọn"
                                size={32}
                                placement="left"
                                /> 
                            </div>
                        </div>

                        {

                          //data 
                        }

                       <ButtonRoundedFull 
                        isBackground={true}
                        backGroundColor={{isBg: true, color: "bg-white shadow-xl dark:bg-primary-500 hover:dark:bg-primary-400"}}
                        Icon={<PiNotePencilFill size={20}/>}
                        iconColor="dark:text-primary-50"
                        size={48}
                        content="Tin nhắn mới"
                        placement="left"
                       />
                      </div>
                  </div>
              </div>      
        </div>
      </div>
    );
  }
  
  export default ModalsMessage;
  