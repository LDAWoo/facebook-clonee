import { useContext } from "react";
import { AppContext } from "../../../../Contexts/AppProvider";
import { defaultImage } from "../../../../Images/DefaultImage";

function HeaderAccount() {
    const {user} = useContext(AppContext)
    return ( 
        <div className="flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.2)] m-4 rounded-lg">
            <div className="flex items-center gap-2 m-1 p-2 hover:bg-gray-100 dark:hover:bg-primary-400 duration-200 rounded-md cursor-pointer">
                <img 
                src={defaultImage}
                className="rounded-full w-10 h-10"
                alt="Avatar"
                />
                <p className="text-[17px] dark:text-primary-50 font-medium">{user[0]?.displayName}</p>
            </div>
            <div className="border-t ml-4 mr-4 border-gray-400 dark:border-gray-700"/>

            <div className="flex items-center text-left rounded-md hover:bg-gray-100 duration-200 dark:hover:bg-primary-400 p-[6px] cursor-pointer m-1">
                <p className="text-[15px] font-medium text-blue-500">Xem tất cả trang cá nhân</p>
            </div>
        </div>
     );
}

export default HeaderAccount;