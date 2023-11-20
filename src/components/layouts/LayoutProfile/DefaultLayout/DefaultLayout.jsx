import { NavLink, useParams } from "react-router-dom";
import HeaderProfile from "../../../../pages/Profile/Header/HeaderProfile";
import Navbar from "../../../../pages/Profile/Navbar/Navbar";
import { useState } from "react";
import ListAddFriend from "../../../../pages/Profile/Header/ListAddFriend";



function DefaultLayout({children}) {
    const { uid } = useParams();

    const [isVisibleSuggestions, setIsVisibleSuggestions] = useState(false);

    const handleUp = () =>{
      setIsVisibleSuggestions(false)
  }

  const handleDown = () =>{
      setIsVisibleSuggestions(true)
  }

    return ( 
      <div className="w-full h-screen overflow-y-auto">
          <div className="flex-col pb-20">
          <div>
        <div className="flex relative justify-center bg-white">
            <div className="flex-col relative mb-20 max-md:w-full max-w-7xl">
              <div className="w-full rounded-lg bg-gray-200" style={{ height: '480px' }} />
              <HeaderProfile uid={uid} onUp={handleUp} onDown={handleDown}/>

              {isVisibleSuggestions && <div className="w-full mt-2">
                        <div className="flex flex-col rounded-md border-2 border-gray-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Những người bạn có thể biết</p>
                                </div>
                                <NavLink>
                                    <p className="text-blue-500 hover:underline">Xem tất cả</p>                                
                                </NavLink>
                            </div>
                            <ListAddFriend uid={uid}/>            
  
                        </div>
                    </div>}
              <Navbar uid={uid} />


            </div>
        </div>
        <div className="flex justify-center bg-gray-200">
          <div className="flex-col relative mb-20 max-md:w-full p-10" style={{width: '1280px'}}>
            {children}
          </div>
        </div>
    
       
      </div>

          </div>
      </div>
     );
}

export default DefaultLayout;