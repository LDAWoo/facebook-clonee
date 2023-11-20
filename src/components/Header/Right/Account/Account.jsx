// import { useContext } from "react";
// import { MessageContext } from "../../../Context/AppMessageProvider";
// import MenuTippyHeadless from "../../../../TippyHeadless/MenuTippyHeadless";
// import Tippy from "@tippyjs/react";

// import { AppContext } from "../../../Context/AppProvider";
import { defaultImage } from "../../../Images/DefaultImage";
// import HeaderAccount from "../../../Account/Header/HeaderAccount";

import Tippy from "@tippyjs/react";
import MenuTippyHeadless from "../../../TippyHeadless/TippyHeadlessCustom";
import BodyAccount from "./Body/BodyAccount";
import { useContext } from "react";
import { MessageContext } from "../../../Contexts/AppMessageProvider";

const accounts = [<BodyAccount key={1} />];

function Account() {
  const { isTippyVisible, setIsTippyVisible } = useContext(MessageContext);

  const handleClickAccount = () => {
    setIsTippyVisible((prevState) => ({
      menu: false,
      message: false,
      notification: false,
      account: !prevState.account,
    }));
  };

  const handleBlur = () => {
    setIsTippyVisible((prevState) => ({
      ...prevState,
      notification: false,
    }));
  };

  return (
    <MenuTippyHeadless width={360} items={accounts} isVisible={isTippyVisible.account} backGroundColor="bg-white dark:bg-primary-600" onBlur={handleBlur}>
      <div onClick={handleClickAccount}>
        <Tippy delay={[500, 0]} content="Tài khoản" placement="bottom" className="dark:bg-primary-50 dark:text-primary-600 bg-primary-600 text-gray-200 text-sm p-2 rounded-lg">
          <img className="cursor-pointer w-10 h-10 rounded-full object-cover" src={defaultImage} />
        </Tippy>
      </div>
    </MenuTippyHeadless>
  );
}

export default Account;
