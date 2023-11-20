function FriendRequest() {
    return ( 
        (
            <div className="flex flex-col w-full items-center justify-center mb-5">
                <div className="">
                    <img
                    src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
                    alt=""
                    width={112}
                    height={112}
                    />
                </div>
                <div>
                    <div className="font-bold text-xl text-gray-600">Chọn tên của người mà bạn muốn xem trước trang cá nhân.</div>
                </div>
            </div>
        )
     );
}

export default FriendRequest;