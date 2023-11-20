import MenuTippyHeadless from "../../../TippyHeadless/TippyHeadlessCustom";
import { MenuIcon } from "../../../icons/icons";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MessageContext } from "../../../Contexts/AppMessageProvider";

function Menu() {
  const { isTippyVisible, setIsTippyVisible } = useContext(MessageContext);

  const handleClickMenu = () => {
    setIsTippyVisible((prevState) => ({
      menu: !prevState.menu,
      message: false,
      notification: false,
      account: false,
    }));
  };

  const handleClickCreate = () =>{
    setIsTippyVisible((prevState) => ({
        menu: !prevState.menu,
        message: false,
        notification: false,
        account: false,
      }));
  }

  return (
    <div>
      <MenuTippyHeadless
        isVisible={isTippyVisible.menu}
        backGroundColor="dark:bg-primary-600"
      >
        <div className="min-lg:flex hidden">
          <ButtonRoundedFull
            Icon={<MenuIcon />}
            content="Menu"
            isBackground={true}
            active={isTippyVisible.menu}
            size={40}
            onClick={handleClickMenu}
          />
        </div>
      </MenuTippyHeadless>

      <MenuTippyHeadless
        isVisible={isTippyVisible.menu}
        backGroundColor="dark:bg-primary-600"
      >
        <div className="min-lg:hidden flex">
          <ButtonRoundedFull
            Icon={<AiOutlinePlus />}
            content="Tạo"
            isBackground={true}
            active={isTippyVisible.menu}
            size={40}
            onClick={handleClickCreate}
          />
        </div>
      </MenuTippyHeadless>
    </div>
  );
}

export default Menu;
