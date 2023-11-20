import { NavLink } from "react-router-dom";

function ButtonNavbar({data, onClick,isActive}) {
    return ( 
        <NavLink to={data.to} onClick={onClick}>
            <div className="space-y-1">
                <div className={`flex cursor-pointer p-3 rounded-md  font-medium text-gray-600 ${data.id !== isActive && 'hover:bg-gray-200'}`}
                style={{transition: 'all .3s ease-in-out'}}
                >
                        <div>{data.title}</div>
                </div>
                {data.id === isActive && <div className="border-2 border-blue-500"/>}
            </div>
         </NavLink>

     );
}

export default ButtonNavbar;