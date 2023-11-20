import { IoMdSettings } from "react-icons/io";
import { BiSolidHelpCircle,BiSolidMessageError,BiSolidMessageSquareError } from "react-icons/bi";
import { FaMoon,FaMousePointer } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";
import { HiLockClosed } from "react-icons/hi";
import { MdLockPerson } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbTableFilled,TbStarFilled,TbZoomPan } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { BsKeyboardFill } from "react-icons/bs";

const size = 20
export const DATA_ITEMS_ACCOUNT = [
    {
        icon: <IoMdSettings size={size}/>,
        title: "Cài đặt & quyền riêng tư",
        children:{
            title: "Cài đặt & quyền riêng tư",
            data: [
                {
                    icon: <IoMdSettings size={size}/>,
                    title: "Cài đặt",
                },
                {
                    icon: <GiEarthAmerica size={size}/>,
                    title: "Ngôn ngữ",
                    children:{
                        title: "Ngôn ngữ",
                        data:[
                            {
                                icon: <GiEarthAmerica size={size}/>,
                                title: "Ngôn ngữ trên Facebook",
                                children:{
                                    title: "Ngôn ngữ trên Facebook",
                                    data:[
                                        {
                                            title: "Tiếng Việt"
                                        },
                                        {
                                            title: "English(US)"
                                        }
                                    ]
                                }
                            },
                            {
                                icon: <IoMdSettings size={size}/>,
                                title: "Xem tất cả trên cài đặt",
                            }
                        ]
                    }
                },
                {
                    icon: <MdLockPerson size={size}/>,
                    title: "Kiểm tra quyền riêng tư",
                },
                {
                    icon: <HiLockClosed size={size}/>,
                    title: "Trung tâm quyền riêng tư",
                },
                {
                    icon: <TfiMenuAlt size={size}/>,
                    title: "Quản lý hoạt động",
                },
                {
                    icon: <TbTableFilled size={size}/>,
                    title: "Tùy chọn Bảng feed",
                }
            ]

            
        }
    },
    {
        
        id: 2,
        icon: <BiSolidHelpCircle size={size}/>,
        title: "Trợ giúp & hỗ trợ",
        children:{
            title:"Trợ giúp & hỗ trợ",
            data:[
                {
                    icon: <BiSolidHelpCircle size={size}/>,
                    title: "Trung tâm trợ giúp"
                },
                {
                    icon: <MdEmail size={size}/>,
                    title: "Hộp thư hỗ trợ"
                },
                {
                    icon: <BiSolidMessageSquareError size={size}/>,
                    title: "Báo cáo sự cô"
                }
            ]
        }
    },
    {
        id: 3,
        icon: <FaMoon size={size}/>,
        title: "Màn hình & trợ năng",
        children:{
            title: "Màn hình & trợ năng",
            data:[
                {
                    icon: <FaMoon size={size}/>,
                    title: "Chế độ tối",
                    content: "Điều chỉnh giao diện của Facebook để giảm độ chói và cho đôi mắt được nghỉ ngơi.",
                    options: [
                        {
                            title: "Tắt",
                            props: "light",
                            isSelected: false
                        },
                        {
                            title: "Bật",
                            props: "dark",
                            isSelected: false
                        },
                        {
                            title: "Tự động",
                            props: "system",
                            content: "Chúng tôi sẽ tự động điều chỉnh màn hình theo cài đặt hệ thống trên thiết bị của bạn.",
                            isSelected: true
                        }
                    ]
                },
                {
                    icon: <TbZoomPan size={size}/>,
                    title: "Chế độ Thu gọn",
                    content: "Làm giảm kích thước phông chữ để có thêm nội dung vừa với màn hình.",
                    options: [
                        {
                            title: "Tắt",
                            isSelected: false
                        },
                        {
                            title: "Bật",
                            isSelected: true
                        },
                    ]    
                },
                {
                    icon: <FaMousePointer size={size}/>,
                    title: "Hiển thị bản xem trước liên kết",
                    content: "Hiển thị thông tin và hành động trong cửa sổ xem trước mà không cần mở trang cho một người, sự kiện hoặc nhóm.",
                    options: [
                        {
                            title: "Hiển thị bản xem trước khi di con trỏ qua liên kết",
                            isSelected: true
                        },
                        {
                            title: "Hiển thị bản xem trước sau khi nhấp",
                            content: "Phù hợp nhất khi sử dụng trình đoc màn hình hoặc kính lúp. Liên kết thay đổi thành nút để mở cửa sổ xem trước",
                            isSelected: false
                        },
                        {
                            title: "Không hiển thị bản xem trước",
                            isSelected: false
                        }
                    ]
                },
                {
                    icon: <TbStarFilled size={size}/>,
                    title: "Bàn phím",
                    children:{
                        title: "Bàn phím",
                        data:[
                            {
                                icon: <BsKeyboardFill size={size}/>,
                                title: "Xem tất cả phím tắt"
                            },
                            {
                                icon: <TbStarFilled size={size}/>,
                                title: "Dùng phím tắt có một ký tự"
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        id: 4,
        icon: <BiSolidMessageError size={size}/>,
        title: "Đóng góp ý kiến",
    },{
        id: 5,
        icon: <RiLogoutBoxRFill size={size}/>,
        title: "Đăng xuất",
    }

]