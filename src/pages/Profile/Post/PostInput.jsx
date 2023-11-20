import { Avatar } from "antd";
import ButtonStudio from "../../../pages/Home/Feed/ButtonStudio";
import { useContext, useEffect, useState } from "react";
import { AppContext, decryptData } from "../../../components/Contexts/AppProvider";
import { defaultImage } from "../../../components/Images/DefaultImage";
import useFirebaseStore from "../../../hooks/useFirebaseStore";

const imageIcon = "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png";
const friendICon = "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png";
function PostInput({ uid }) {
  const { setIsCreatePostVisible, user } = useContext(AppContext);
  const userDecryptData = decryptData(user);

  const condition = {
    fieldName: "uid",
    operator: "==",
    compareValue: uid,
  };

  const profile = useFirebaseStore("users", condition, "uid");

  console.log(profile[0]?.displayName);

  const handleClickInput = () => {
    setIsCreatePostVisible(true);
  };

  return (
    <div className="rounded-xl bg-white mt-3 shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 p-4 items-center">
        <Avatar src={userDecryptData[0].photoURL || defaultImage} size={40} />

        <div className="flex rounded-full cursor-pointer h-10 bg-gray-100 flex-grow px-5 hover:bg-gray-200" onClick={handleClickInput}>
          <p className="flex items-center">Write something to {profile[0]?.displayName}...</p>
        </div>
      </div>
      <div className="flex justify-evenly p-3 border-t font-medium text-gray-500">
        <ButtonStudio Icon={imageIcon} title="Ảnh/video" />
        <ButtonStudio Icon={friendICon} title="Gắn thẻ người khác" />
      </div>
    </div>
  );
}

export default PostInput;
