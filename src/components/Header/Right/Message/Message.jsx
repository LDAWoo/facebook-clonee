import { useContext } from "react";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import { MessageContext } from "../../../Contexts/AppMessageProvider";
import MenuTippyHeadless from "../../../TippyHeadless/TippyHeadlessCustom";
import { MessageIcon } from "../../../icons/icons";
import BodyMessage from "./Body/BodyMessage";
import HeaderMessage from "./Header/HeaderMessage";
import SearchMessage from "./Search/SearchMessage";

const messageItem = [<HeaderMessage key={1} />, <SearchMessage key={2} />, <BodyMessage key={2} />];

function Message() {
  const { isTippyVisible, setIsTippyVisible } = useContext(MessageContext);

  const handleClickMessage = () => {
    setIsTippyVisible((prevState) => ({
      menu: false,
      message: !prevState.message,
      notification: false,
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
    <MenuTippyHeadless width={360} items={messageItem} onClickOutside={handleClickOutSide} isVisible={isTippyVisible.message} backGroundColor="bg-white dark:bg-primary-600">
      <div>
        <ButtonRoundedFull Icon={<MessageIcon />} content="Messenger" isBackground={true} active={isTippyVisible.message} number={10} size={40} onClick={handleClickMessage} />
      </div>
    </MenuTippyHeadless>
  );
}

export default Message;
