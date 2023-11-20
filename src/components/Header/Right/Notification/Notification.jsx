import { useContext } from "react";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import MenuTippyHeadless from "../../../TippyHeadless/TippyHeadlessCustom";
import { NotificationIcon } from "../../../icons/icons";
import BodyNotification from "./Body/BodyNotification";
import HeaderNotification from "./Header/HeaderNotification";
import { MessageContext } from "../../../Contexts/AppMessageProvider";

const notification = [<HeaderNotification key={1} />, <BodyNotification key={2} />];

function Notification() {
  const { isTippyVisible, setIsTippyVisible } = useContext(MessageContext);

  const handleClickNotification = () => {
    setIsTippyVisible((prevState) => ({
      menu: false,
      message: false,
      notification: !prevState.notification,
      account: false,
    }));
  };

  const handleClickOutSide = () => {
    setIsTippyVisible({
      menu: false,
      message: false,
      notification: false,
      account: false,
    });
  };

  return (
    <MenuTippyHeadless width={360} items={notification} onClickOutside={handleClickOutSide} isVisible={isTippyVisible.notification} backGroundColor="bg-white dark:bg-primary-600">
      <div>
        <ButtonRoundedFull Icon={<NotificationIcon />} content="Messenger" isBackground={true} active={isTippyVisible.notification} number={10} size={40} onClick={handleClickNotification} />
      </div>
    </MenuTippyHeadless>
  );
}

export default Notification;
