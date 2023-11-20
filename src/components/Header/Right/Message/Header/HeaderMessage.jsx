import ButtonRoundedFull from "../../../../Button/ButtonRounded/ButtonRoundedFull";
import { SlOptions } from "react-icons/sl";
import { MdZoomOutMap } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";

function HeaderMessage() {
  const handleClick = () => {};

  return (
    <div className="flex flex-grow items-center justify-between pt-3 pl-3 pr-3 pb-1">
      <p className="text-2xl font-bold dark:text-primary-100">Chat</p>
      <div className="flex space-x-1">
        <ButtonRoundedFull
          className="dark:text-primary-200"
          content="Tùy chọn"
          placement="bottom"
          onClick={handleClick}
          Icon={<SlOptions />}
          size={28}
        />
        <ButtonRoundedFull
          className="dark:text-primary-200"
          content="Xem tất cả trong messenger"
          placement="bottom"
          onClick={handleClick}
          Icon={<MdZoomOutMap />}
          size={28}
        />
        <ButtonRoundedFull
          className="dark:text-primary-200"
          content="Tin nhắn mới"
          placement="bottom"
          onClick={handleClick}
          Icon={<HiPencilAlt />}
          size={28}
        />
      </div>
    </div>
  );
}

export default HeaderMessage;
