import ButtonRounded3xl from "../../../../Button/ButtonRounded/ButtonRounded3xl";

function HeaderNotification() {
    return ( 
        <div>
            <div className="flex space-x-2 pl-4">
              <ButtonRounded3xl active title="Tất cả"/>
              <ButtonRounded3xl title="Chưa đọc"/>
            </div>
            <div className="flex items-center justify-between m-1 pl-4 pr-4">
              <p className="font-medium text-lg dark:text-primary-100">Mới</p>
              <p className="p-2 text-blue-500 hover:bg-gray-200 hover:dark:bg-primary-400 text-[15px] cursor-pointer rounded-sm">
                Xem tất cả
              </p>
            </div>
        </div>
     );
}

export default HeaderNotification;