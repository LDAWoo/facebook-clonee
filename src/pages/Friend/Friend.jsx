import FriendHome from "./FriendHome/FriendHome";


function Friend() {
    return ( 
        <div className="flex w-full pl-5 pr-5">
            <div className="w-full h-[calc(100vh_-_56px)] scrollbar ">
                {/* <div className="flex justify-center">
                    <img
                    src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
                    alt=""
                    width={112}
                    height={112}
                    />
                </div>
                <div>
                    <div>
                        <span className="font-bold text-xl text-gray-600">Lời mời và gợi ý kết bạn sẽ hiển thị tại đây.</span>
                    </div>
                </div>    */}
                <FriendHome/>

            </div>
        </div>
     );
}

export default Friend;