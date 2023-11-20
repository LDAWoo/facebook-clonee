// import { Avatar } from "antd";
// import ButtonOption from "../../Button/ButtonOption";
// import { useContext, useEffect, useState } from "react";
// import { MessageContext } from "../../Context/AppMessageProvider";




function BodyMessage() {
    // const { user } = useContext(AppContext);
    // const {setDataModalsMessage, sortedConversationFilteredAllFriends,setIsTippyVisible,} = useContext(MessageContext)

    const sortedConversationFilteredAllFriends=[]

    // const handleClickMessage = (id) => {
    //     setDataModalsMessage((prevModalsArray) => {
    //         const existingIds = Array.isArray(prevModalsArray) ? prevModalsArray : [];

    //         // Check if the id is already in the modalsArray
    //         const idExists = existingIds.includes(id);

    //         // If the id exists, remove it from the array
    //         const filteredIds = idExists ? existingIds.filter((existingId) => existingId !== id) : existingIds;

    //         // Add the new id to the beginning of the array
    //         return [id, ...filteredIds];
    //       });

         
  
    //       setIsTippyVisible( {
    //         menu: false,
    //         message: false,
    //         notification: false,
    //         account: false
    //     })
    // }

    // console.log(sortedConversationFilteredAllFriends);

    return (
        <div className="pt-2 pb-2 pl-4 pr-4">
            <div className="flex space-x-2">
                {/* <ButtonOption active title="Hộp thư" />
                <ButtonOption title="Cộng đồng" /> */}
            </div>

            <div className="flex-col pt-3 ">
            {sortedConversationFilteredAllFriends === null ? (
          <div className="flex justify-center">Loading...</div>
        ) : sortedConversationFilteredAllFriends.length === 0 ? (
          <div className="flex justify-center">Không tìm thấy tin nhắn.</div>
        ) : (
          sortedConversationFilteredAllFriends?.map((mess,index) => {
                                // const lastMessage = mess?.messages[mess?.messages.length - 1];
                                return (
                                    <div
                                    key={index}
                                        className="flex items-center cursor-pointer rounded-md hover:bg-gray-100 p-2"
                                        // onClick={() => handleClickMessage(mess?.conversationsId)}
                                    >
                                        {/* <img key={mess?.id} src={mess?.photoURL} size={58} />
                                        <div className="ml-2">
                                            <p className="font-medium">{mess.displayName}</p>
                                            <div className="flex text-xs space-x-1">
                                                {lastMessage?.uid === user[0]?.uid ? (
                                                    <>
                                                        <p className="text-gray-700"
                                                            style={{
                                                                fontSize: '13px', 
                                                                display: '-webkit-box', 
                                                                WebkitLineClamp: 1,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: "190px"
                                                            }}>
                                                            Bạn: {lastMessage?.content}
                                                        </p>

                                                        <span>{formatTime(lastMessage.createdAt?.seconds)}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="text-gray-700"
                                                            style={{
                                                                fontSize: '13px', 
                                                                display: '-webkit-box', 
                                                                WebkitLineClamp: 1,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                maxWidth: "190px"
                                                            }}>
                                                            {lastMessage?.content}
                                                        </p>

                                                       <span>{formatTime(lastMessage.createdAt?.seconds)}</span>
                                                    </>
                                                )

                                                }

                                            </div>
                                        </div> */}
                                    </div>
                                );
                            })
                        )
                }





            </div>
        </div>
    );
}

export default BodyMessage;