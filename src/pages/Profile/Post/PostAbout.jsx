import {AiFillClockCircle} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

function PostAbout() {
    return ( 
        <div className="rounded-md bg-white">
            <div className="flex-col p-3 space-y-3">
                <p className='text-2xl font-bold'>Giới thiệu</p>

                <div className='flex items-center space-x-2 text-gray-600'>
                    <MdLocationOn size={24}/>
                    <div>Đến từ <span className='font-medium text-black'>Thành phố Hồ Chí Minh</span></div>
                </div>  

                <div className='flex items-center space-x-2 text-gray-600'>
                    <AiFillClockCircle size={20}/>
                    <div>Tham gia vào Tháng 7 năm 2023</div>
                </div>
            </div>
        </div>
     );
}

export default PostAbout;