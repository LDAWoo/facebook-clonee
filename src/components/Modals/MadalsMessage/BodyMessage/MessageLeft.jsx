import { useState } from "react";
import MenuIcon from "./MenuIcon";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import Tippy from "@tippyjs/react";
import { defaultImage } from "../../../Images/DefaultImage";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase/firebaseConfig";

function MessageLeft({ data, isBackground,displayName, photoURL }) {
  const [isVisibleShowIcon, setIsVisibleShowIcon] = useState({
    visible: false,
    id: ""
  });
  const [isIconVisible, setIsIconVisible] = useState(false);
  const colorTopic = "bg-fb-primary";

  const handleChooseIcon = async (src, alt) => {
    const messageIdRef = data?.id;
    const messageRef = await doc(database,"messages",messageIdRef)

    const friendUID = data?.uid;

    Object.values(data?.Icons).map((emoji,index)=>{
        if(emoji?.displayName === displayName){
          console.log(123);
          if(emoji?.src === src){
              updateDoc(messageRef,{
                Icons:{

                }
              })
          }else{
            updateDoc(messageRef,{
              Icons:{
                src,
                alt,
                displayName
              }
              })
          }
        }else{
          updateDoc(messageRef,{
            Icons:{
              src,
              alt,
              displayName
            }  
          })
        }
    })

    

    // if(data?.Icons.src){
    //   if(src === data?.Icons.src){
    //     updateDoc(messageRef,{
    //       Icons: {
    //       }
    //     })
    //     return;
    //   }
    //   updateDoc(messageRef,{
    //     Icons: [
    //       {
    //         src,
    //         alt,
    //         displayName
            
    //       },
    //       {
    //         src,
    //         alt,
    //         displayName
    //       }
    //     ]
    //   })
    //   return;
    // }
    
    // updateDoc(messageRef,{
    //   Icons: {
    //     src,
    //     alt,
    //     displayName
    //   }
    // })
    
  };

  const handleClickIcon = (id) => {
    setIsVisibleShowIcon({visible: !isVisibleShowIcon.visible, id})
  
  };

  const handleBlurIcon = () => {
    setIsVisibleShowIcon(false);
  };

  const handleMouseEnter = () => {
    setIsIconVisible(true);
  };

  const handleMouseLeave = () => {
    if(isVisibleShowIcon.visible){
      setIsIconVisible(true);
    }else{
      setIsIconVisible(false);
    }
  };

  const messageIcons = data?.Icons;
  const messageData = data?.content


  return (
    <div
      className="relative"
      role="row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col relative" role="gridcell" tabIndex={0}>
        <h4 className="outline-none">
          <span
            className="absolute overflow-x-hidden overflow-y-hidden"
            style={{ width: "1px", height: "1px" }}
          ></span>
        </h4>
        <div className="w-full h-1" role="none"></div>

        <div className="flex" role="none">
          <div
            className={`flex flex-col self-stretch pr-2 pl-2 flex-grow-0 max-w-full justify-end ${
               "-translate-y-6"
            }`}
          >
            <div className="w-7 flex justify-end flex-shrink-0 h-7">
              <div className="h-full w-full flex basis-full justify-center items-center flex-grow">
                <img
                  src={defaultImage}
                  alt=""
                  className="inline-block object-cover rounded-full w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-grow min-w-0 flex-shrink">
            <div className="flex flex-col justify-start items-end">
              <div className="flex w-full" role="none">
                <div
                  className="flex flex-col relative justify-start"
                  style={{ maxWidth: "175px" }}
                >
                  <div className="flex flex-col w-full items-end justify-start flex-grow">
                    <div></div>
                    <Tippy
                      // content={formatDate(data.createdAt?.seconds)}
                      placement="left"
                    >
                      <div className="flex relative max-w-full flex-col items-end">
                        <div
                          className={`flex w-full rounded-2xl ${
                            isBackground && colorTopic
                          }`}
                        >
                          <div></div>
                          <div
                            className={`overflow-x-hidden pt-1 relative overflow-y-hidden ${isBackground && 'pb-2 pl-3 pt-2 pr-3 mb-0'}`}
                            style={{
                              wordBreak: "break-word",
                              wordWrap: "break-word",
                            }}
                          >
                            <div className="relative box-border z-0">
                              <div className="whitespace-pre-wrap text-left text-sm text-gray-50">
                                {Object.values(messageData)?.map(
                                  (item, index) => {
                                    if (item?.type === "text") {
                                      return (
                                        <span
                                          key={index}
                                          className="text-[15px]"
                                        >
                                          {item.content}
                                        </span>
                                      );
                                    } else if (item?.type === "emoji") {
                                      return (
                                        <span
                                          key={index}
                                          className={`emoji inline-block h-[22px] w-[22px] ${
                                            !isBackground &&
                                            "scale-[1.5] ml-3 translate-y-0"
                                          } cursor-default mt-0 mb-0 mr-1 text-center translate-y-1`}
                                          style={item?.style}
                                        />
                                      );
                                    } else {
                                      return null;
                                    }
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tippy>
                    {messageIcons?.src && <div className="flex flex-col flex-grow max-w-full justify-end">
                        <div className="flex relative w-full z-1 justify-end">
                          <div className="-translate-y-2 ">
                            <ButtonRoundedFull
                              isBackground
                              content={messageIcons?.displayName}
                              size={24}
                              Icon={
                                <img
                                  width={16}
                                  height={16}
                                  src={messageIcons?.src}
                                  alt={messageIcons?.alt}
                                />
                              }
                            />
                            
                          </div>
                        </div>
                      </div>
                      }
                  </div>
                </div>

                <div className="flex flex-col flex-grow max-w-full justify-center self-stretch items-center ">
                  <div
                    className={`flex flex-col justify-center flex-grow w-full flex-shrink relative pl-1 ${
                       "-translate-y-3"
                    }`}
                    aria-hidden="true"
                  >
                    <div className="flex items-center" role="none">
                    {isIconVisible && (
                    <div className="flex flex-col flex-grow max-w-full justify-center self-stretch items-center ">
                      <div
                        className={`flex flex-col justify-center flex-grow w-full flex-shrink relative pr-1 ${
                            messageIcons?.src && "-translate-y-3"
                        }`}
                        aria-hidden="true"
                      >
                        <div
                          className="flex items-center flex-row-reverse"
                          role="none"
                        >
                          <MenuIcon
                            urlIcon={messageIcons?.src}
                            isVisibleIcon={isVisibleShowIcon}
                            handleClickMessageIcon={handleChooseIcon}
                            onClickIcon={handleClickIcon}
                            onBlurIcon={handleBlurIcon}
                            messageId={data?.id}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MessageLeft;
