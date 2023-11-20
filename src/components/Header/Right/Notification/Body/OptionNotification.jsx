import {BsCheck2} from 'react-icons/bs'
// import {AiFillCloseSquare} from "react-icons/ai"
// import {CiSettings} from 'react-icons/ci'
// import {SiCockroachlabs} from 'react-icons/si'

const DataOptionsNotification =[
    {
        id:1,
        icon: <BsCheck2/>,
        title: "Đánh dấu là đã đọc"
    },
    {
        id:1,
        icon: <BsCheck2/>,
        title: "Gỡ thông báo này"
    },
    {
        id:1,
        icon: <BsCheck2/>,
        title: "Tắt thông báo về 'Type Notification'"
    },
    {
        id:1,
        icon: <BsCheck2/>,
        title: "Báo cáo sự cố cho Đội ngũ phụ trách Thông báo"
    },

]

function OptionNotification() {
    return ( 
        <div className='flex flex-col '>
            {
                DataOptionsNotification.map((option,index) =>(
                    <div
                    key={index}
                    >
                        {option.title}
                        {/* <ButtonRoundedMd 
                        Icon={option.icon}

                        /> */}
                    </div>
                ))
            }
        </div>
     );
}

export default OptionNotification
