import { Avatar } from "antd";
import ButtonStudio from "./ButtonStudio";
import { useContext } from "react";
import { AppContext, decryptData } from "../../../components/Contexts/AppProvider";
import { defaultImage } from "../../../components/Images/DefaultImage";

const avatar = defaultImage;
const videoIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png";
const imageIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png";
const feelICon = "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png";
function InputBox() {
  const { setIsCreatePostVisible, user } = useContext(AppContext);

  const handleClickInput = () => {
    setIsCreatePostVisible(true);
  };

  return (
    <div className="rounded-xl bg-white dark:bg-primary-600 mt-3 shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 p-4 items-center">
        <Avatar src={avatar || defaultImage} size={40} />

        <div className="flex rounded-full cursor-pointer h-10 bg-gray-100 dark:bg-primary-500 dark:text-primary-200 flex-grow px-5 hover:bg-gray-200 dark:hover:bg-primary-300 duration-200" onClick={handleClickInput}>
          <p className="flex items-center">{user[0]?.displayName} ơi bạn đang nghĩ gì thế?</p>
        </div>
      </div>
      <div className="flex justify-evenly p-3 border-t dark:border-primary-400 font-medium text-gray-500">
        <ButtonStudio Icon={videoIcon} title="Video trực tiếp" />
        <ButtonStudio Icon={imageIcon} title="Ảnh/video" />
        <ButtonStudio Icon={feelICon} title="Cảm xúc/hoạt động" />
      </div>
    </div>
  );
}

export default InputBox;
