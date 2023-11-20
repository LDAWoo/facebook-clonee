import { NavLink } from "react-router-dom";

function PostPhoto() {
    return ( 
        <div className="rounded-md bg-white">
            <div className="flex-col p-3 space-y-3">
                <div className="flex items-center justify-between">
                    <p className='text-2xl font-bold'>Ảnh</p>
                    <NavLink to={123}>
                        <div className="text-blue-500 hover:bg-gray-200 p-2 rounded-md">Xem tất cả ảnh</div>
                    </NavLink>
                </div>
                
            </div>
        </div>
     );
}

export default PostPhoto;