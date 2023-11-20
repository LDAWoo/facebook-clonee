function ButtonIconCreatePost({Icon,onClickOpenAddImage,active }) {
    return ( 
        <div className={`cursor-pointer rounded-full 
        hover:bg-gray-100 p-2
        ${active ? "bg-gray-100" : ""}`}
        onClick={onClickOpenAddImage}>
            <img
            src={Icon}
            alt=""
            />
        </div>
     );
}

export default ButtonIconCreatePost;