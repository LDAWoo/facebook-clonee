import { Switch } from "antd";
import { useState } from "react";
import { TbSquareDot } from "react-icons/tb";
function FriendSetting() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex w-full p-2 flex-col gap-1 items-center justify-start-2">
      <div className="w-full pt-3 pb-3 pl-2 pr-2 ml-2 mr-2">
        <div className="flex flex-col">
          <span className="dark:text-primary-50 text-[17px] font-medium">
            Cài đặt thông báo
          </span>
          <span className="dark:text-primary-200  text-[13px]">
            Bại có thể quản lý cách nhận thông báo về thông tin mói của Bạn bè.
          </span>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-gray-300 dark:border-gray-600 pl-2 pr-2" />

      <div
        className="inline w-full hover:bg-gray-100 dark:hover:bg-primary-400 cursor-pointer rounded-lg items-center flex-row ml-2 mr-2"
        onClick={handleChange}
      >
        <div className="flex flex-row items-center justify-between pt-3 pb-3 pl-2 pr-2">
          <div className="dark:text-primary-50 ">
            <TbSquareDot size={22} />
          </div>
          <span className=" dark:text-primary-50 text-[15px] font-medium">
            Hiển thị dấu chấm thông báo
          </span>
          <div>
            <Switch
              className={` ${
                isChecked ? "bg-fb-primary" : "dark:bg-primary-100 bg-gray-200"
              } `}
              checked={isChecked}
              onChange={() => handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendSetting;
