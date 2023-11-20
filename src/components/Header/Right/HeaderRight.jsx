// import Menu from "./Menu/Menu";
import Message from "./Message/Message";
import Notification from "./Notification/Notification";
import Account from "./Account/Account";
import Menu from "./Menu/Menu";

function HeaderRight() {
    
    return ( 
        <div className="flex items-center justify-center space-x-2">
        {/* Menu */}
        <Menu />

        {/* Message */}
        <Message />

        {/* Notificaton */}
        <Notification />

        {/* Account */}
        <Account />
      </div>
     );
}

export default HeaderRight;