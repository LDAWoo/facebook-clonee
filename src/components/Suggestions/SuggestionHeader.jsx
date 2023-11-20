import PropTypes from 'prop-types'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function SuggestionHeader({data,onBack,link}) {
    return ( 
        <div className="mt-5 ml-1 mr-1 mb-3">
            <div className='flex space-x-3 dark:text-primary-50 items-center'>
                <div className='flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-primary-500  cursor-pointer h-8 w-8'
                     onClick={onBack}>
                    <AiOutlineArrowLeft size={20}/>
                </div>
                <div className='flex flex-col'>
                    {link && 
                    <NavLink 
                    role='link' 
                    to={link?.to} 
                    onClick={onBack}>
                        <p className='text-[13px] hover:underline dark:text-primary-200'>
                            {link?.title}
                        </p>
                    </NavLink> }         
                    <span className="font-bold text-2xl">{data?.title}</span>
                </div>
            </div>
        </div>
     );
}

SuggestionHeader.propTypes = {
    data: PropTypes.object,
    onBack: PropTypes.func
}

export default SuggestionHeader;