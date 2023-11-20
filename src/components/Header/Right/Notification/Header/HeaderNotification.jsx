import { SlOptions } from "react-icons/sl";
import ButtonRoundedFull from "../../../../Button/ButtonRounded/ButtonRoundedFull";

function HeaderNotification() {
    return ( 
        <div className="flex p-4 items-center justify-between">
            <p className="font-bold text-2xl dark:text-primary-100">Thông báo</p>
            <ButtonRoundedFull 
            content="Tùy chọn" 
            Icon={<SlOptions/>} 
            size={36}
            placement="bottom"
            />
        </div>
     );
}

export default HeaderNotification;