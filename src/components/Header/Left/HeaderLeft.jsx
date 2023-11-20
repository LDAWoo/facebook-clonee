import { AiOutlineSearch } from "react-icons/ai";
import { LogoFacebook } from "../../icons/icons";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function HeaderLeft() {
    const [isFocus,setIsFocus] = useState(false)

    const handleChange = () =>{

    }

    const handleFocus = () =>{
        setIsFocus(true)
    }

    const handleBlur = () =>{
        setIsFocus(false)
    }

    return ( 
        <div className="flex items-center text-white">
        {!isFocus ? <LogoFacebook /> : <div className="hover:dark:bg-primary-500 text-gray-600 p-[11px] hover:bg-gray-100 duration-200 rounded-full cursor-pointer"><BiArrowBack size={20}/></div> }
        <div className="flex ml-2 items-center rounded-full bg-gray-100 dark:bg-primary-500 p-[11px] duration-200 transform">
          {!isFocus && <AiOutlineSearch className="text-gray-600 dark:text-primary-200" size={20} /> }
          <input
            className="hidden w-full xl:flex ml-2 dark:placeholder-primary-50 bg-transparent items-center outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
     );
}

export default HeaderLeft;