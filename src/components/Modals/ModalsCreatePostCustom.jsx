import { CaretDownOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import ButtonIconCreatePost from "./ButtonIconCreatePost";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../components/Contexts/AppProvider";
import ButtonAddImage from "./Components/ButtonAddImage";
import { defaultImage } from "../Images/DefaultImage";

const avatar = defaultImage;
const globals = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png";

const imageIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png";
const friendsIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png";
const feelIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png";
const locationIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png";
const flagIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png";

function ModalsCreatePostCustom() {
  const { setIsCreatePostVisible, isAddImageVisible, setIsAddImageVisible } = useContext(AppContext);
  const [value, setValue] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const spanRef = useRef(null);
  const handleOpenAddImage = () => {
    setIsAddImageVisible(true);
  };

  const handlePost = () => {
    if (value.length === 0) return;
    setIsCreatePostVisible(false);
  };

  const handleChangeSpan = (event) => {
    setValue(event.target.innerText);
  };

  const handleBlur = () => {
    if (value === "") {
      setIsPlaceholderVisible(true);
    }
  };

  const handleFocus = () => {
    setIsPlaceholderVisible(false);
  };

  return (
    <div className="flex-col">
      <div className="flex items-center justify-center text-xl font-bold border-b-2 pb-5">
        <p>Tạo bài viết</p>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <Avatar size={40} src={avatar} />
        <div className="flex-col cursor-pointer">
          <p className="flex justify-start font-medium">Vũ Lee</p>
          <div
            className="flex items-center space-x-1 font-medium
                    bg-gray-300 rounded-lg p-1 h-6 
                    "
          >
            <img src={globals} className="w-3 h-3" alt="" />
            <p>Công khai</p>
            <CaretDownOutlined style={{ fontSize: 12 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 overflow-y-auto h-40">
        <span ref={spanRef} contentEditable onInput={handleChangeSpan} className="text-lg focus:outline-none" onBlur={handleBlur} onFocus={handleFocus} suppressContentEditableWarning={true}>
          {isPlaceholderVisible && "Vũ ơi, bạn đang nghĩ gì?"}
        </span>

        {/*Button Image */}
        {isAddImageVisible && <ButtonAddImage />}
      </div>

      <div className="flex items-center mt-4">
        <div className="flex flex-grow rounded-xl h-14 border border-solid border-gray-300 items-center space-x-2">
          <p className="ml-5 cursor-pointer font-medium">Thêm vào bài viết của bạn</p>
          <ButtonIconCreatePost Icon={imageIcon} onClickOpenAddImage={handleOpenAddImage} active={isAddImageVisible} />
          <ButtonIconCreatePost Icon={friendsIcon} />
          <ButtonIconCreatePost Icon={feelIcon} />
          <ButtonIconCreatePost Icon={locationIcon} />
          <ButtonIconCreatePost Icon={flagIcon} />
        </div>
      </div>

      <div className="mt-4">
        <button
          className={`w-full bg-blue-500 h-9 font-medium text-lg rounded-lg                  
                    ${value.length === 0 ? "cursor-not-allowed bg-gray-300 text-gray-500" : "hover:bg-blue-600 text-white"}
                    `}
          onClick={handlePost}
        >
          Đăng
        </button>
      </div>
    </div>
  );
}

export default ModalsCreatePostCustom;
