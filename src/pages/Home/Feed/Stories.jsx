import { Image } from "antd";
import StoryCard from "./StoryCard";
import { PlusOutlined } from "@ant-design/icons";
import { ArrowIconLeft, ArrowIconRight } from "../../../components/icons/icons";
import { useContext, useRef, useState } from "react";
import { AppContext, decryptData } from "../../../components/Contexts/AppProvider";
import { defaultImage } from "../../../components/Images/DefaultImage";

const stories = [
  {
    id: 1,
    name: "Nguyễn Anh Khôi",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t15.5256-10/356529555_1285689542068099_8347018210810373586_n.jpg?stp=dst-jpg_s280x280&_nc_cat=100&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Gv0bw_BcmQQAX-vwDSb&_nc_oc=AQkXJeaWZdojl1wZsJXpP6Oxx2BDuHZjwCApqrNghs27OpzpnM6lgkbtXjusy_3SbkNYpPL9WlYnEuVY2ipY4BLU&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCRsaTd1YjLnME9rD_pMa40SC19ziG3wTqhncqkADO0iw&oe=649D61D5",
    profile: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344090253_1578653535957174_4367521676553683819_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4RsKjnuqcUYAX8UHOnc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfB1bSDT8jXnXM2okpH6mi98j7bGd1k-i2iICQYcjFyLCA&oe=649EB0BF",
  },
  {
    id: 2,
    name: "Ánh Vũ",
    src: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t15.5256-10/355425747_925081648792620_5956817169823885516_n.jpg?stp=dst-jpg_s280x280&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=nFMPoVB_08kAX8mcgsw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCTlUAy1bx-BxClfbE0zl7McPkULGFqCn7txjAq08ExnQ&oe=649D167F",
    profile:
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344398857_1056170049121232_2531777876689591048_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=0e9dac&_nc_ohc=XIdqurHol3IAX9DArFf&_nc_oc=AQlGzoKcItGfeC-q3i1dthtotLtHUcm0rKgNBAcYIuHGp8T7uXUr1H4w35AWOsr-WFkhy1WLtfr9qiznjHMUnj2j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCX8fIRYPy6NDEliyAn2wFPH-mM38aiFCfxaEWGHAu9lQ&oe=649F4F15",
  },
  {
    id: 3,
    name: "Ngọc Ngân",
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/355062399_3512568968957398_3624122351637761406_n.jpg?stp=dst-jpg_s280x280&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=l4X7MwJL6lwAX83q0fH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDYs8g7uKiY0Bckq9lI7zUuJyFnb1geFhLFScWFRbn0cw&oe=649E42FB",
    profile: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/355666938_807430580900788_5591441327211311784_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BhUwbK0dGPUAX-kQqNl&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7rTdL10mcjJ1Mb4UGSKhDuD5YUhWZ6r19M96zO6qo1A&oe=649E1BB0",
  },
  {
    id: 4,
    name: "Tấn Trọng",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t51.36329-10/355593145_937669094205963_1896845109573203934_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Af5BPJdJIiMAX_nrMOO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrHXe4fWdyhOsL9SPv-zH6dtZi7OQIdi638kRd_-lvEQ&oe=649E4659",
    profile: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/332299531_588793803125359_5198621420901074166_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hPtf16YPwzAAX-v5Up-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBla_6JYJNQH7KYYK_ykxUI3LR7lwwx9byFLIKb5Lk_lg&oe=649D3194",
  },
  {
    id: 6,
    name: "Ngọc Ngân",
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/355062399_3512568968957398_3624122351637761406_n.jpg?stp=dst-jpg_s280x280&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=l4X7MwJL6lwAX83q0fH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDYs8g7uKiY0Bckq9lI7zUuJyFnb1geFhLFScWFRbn0cw&oe=649E42FB",
    profile: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/355666938_807430580900788_5591441327211311784_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BhUwbK0dGPUAX-kQqNl&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7rTdL10mcjJ1Mb4UGSKhDuD5YUhWZ6r19M96zO6qo1A&oe=649E1BB0",
  },
  {
    id: 7,
    name: "Tấn Trọng",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t51.36329-10/355593145_937669094205963_1896845109573203934_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Af5BPJdJIiMAX_nrMOO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrHXe4fWdyhOsL9SPv-zH6dtZi7OQIdi638kRd_-lvEQ&oe=649E4659",
    profile: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/332299531_588793803125359_5198621420901074166_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hPtf16YPwzAAX-v5Up-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBla_6JYJNQH7KYYK_ykxUI3LR7lwwx9byFLIKb5Lk_lg&oe=649D3194",
  },
  {
    id: 8,
    name: "Ngọc Ngân",
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/355062399_3512568968957398_3624122351637761406_n.jpg?stp=dst-jpg_s280x280&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=l4X7MwJL6lwAX83q0fH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDYs8g7uKiY0Bckq9lI7zUuJyFnb1geFhLFScWFRbn0cw&oe=649E42FB",
    profile: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/355666938_807430580900788_5591441327211311784_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BhUwbK0dGPUAX-kQqNl&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7rTdL10mcjJ1Mb4UGSKhDuD5YUhWZ6r19M96zO6qo1A&oe=649E1BB0",
  },
  {
    id: 9,
    name: "Tấn Trọng",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t51.36329-10/355593145_937669094205963_1896845109573203934_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Af5BPJdJIiMAX_nrMOO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrHXe4fWdyhOsL9SPv-zH6dtZi7OQIdi638kRd_-lvEQ&oe=649E4659",
    profile: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/332299531_588793803125359_5198621420901074166_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hPtf16YPwzAAX-v5Up-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBla_6JYJNQH7KYYK_ykxUI3LR7lwwx9byFLIKb5Lk_lg&oe=649D3194",
  },
  {
    id: 10,
    name: "Ngọc Ngân",
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/355062399_3512568968957398_3624122351637761406_n.jpg?stp=dst-jpg_s280x280&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=l4X7MwJL6lwAX83q0fH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDYs8g7uKiY0Bckq9lI7zUuJyFnb1geFhLFScWFRbn0cw&oe=649E42FB",
    profile: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/355666938_807430580900788_5591441327211311784_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BhUwbK0dGPUAX-kQqNl&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7rTdL10mcjJ1Mb4UGSKhDuD5YUhWZ6r19M96zO6qo1A&oe=649E1BB0",
  },
  {
    id: 11,
    name: "Tấn Trọng",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t51.36329-10/355593145_937669094205963_1896845109573203934_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Af5BPJdJIiMAX_nrMOO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrHXe4fWdyhOsL9SPv-zH6dtZi7OQIdi638kRd_-lvEQ&oe=649E4659",
    profile: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/332299531_588793803125359_5198621420901074166_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hPtf16YPwzAAX-v5Up-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBla_6JYJNQH7KYYK_ykxUI3LR7lwwx9byFLIKb5Lk_lg&oe=649D3194",
  },
  {
    id: 12,
    name: "Ngọc Ngân",
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/355062399_3512568968957398_3624122351637761406_n.jpg?stp=dst-jpg_s280x280&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=l4X7MwJL6lwAX83q0fH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDYs8g7uKiY0Bckq9lI7zUuJyFnb1geFhLFScWFRbn0cw&oe=649E42FB",
    profile: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/355666938_807430580900788_5591441327211311784_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BhUwbK0dGPUAX-kQqNl&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7rTdL10mcjJ1Mb4UGSKhDuD5YUhWZ6r19M96zO6qo1A&oe=649E1BB0",
  },
  {
    id: 13,
    name: "Tấn Trọng",
    src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t51.36329-10/355593145_937669094205963_1896845109573203934_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Af5BPJdJIiMAX_nrMOO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrHXe4fWdyhOsL9SPv-zH6dtZi7OQIdi638kRd_-lvEQ&oe=649E4659",
    profile: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/332299531_588793803125359_5198621420901074166_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hPtf16YPwzAAX-v5Up-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBla_6JYJNQH7KYYK_ykxUI3LR7lwwx9byFLIKb5Lk_lg&oe=649D3194",
  },
];
const avatar = defaultImage;

function Stories() {
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const scrollRef = useRef();
  const { user } = useContext(AppContext);

  const handleClickLeft = () => {
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    container.scrollLeft -= scrollStep;
    if (container.scrollLeft <= scrollStep) {
      setIsArrowLeftVisible(false);
    }
  };

  const handleClickRight = () => {
    setIsArrowLeftVisible(true);
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    container.scrollLeft += scrollStep;
  };

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex justify-start mt-3 mb-3 w-full space-x-2 overflow-hidden scroll-smooth">
        <div className="flex-col flex items-center justify-center relative h-52 cursor-pointer hover:opacity-90">
          <Image className="rounded-tl-xl rounded-tr-xl object-cover m-0" src={user[0]?.photoURL || defaultImage} width={112} height={156} preview={false} />
          <button className="absolute rounded-full flex items-center justify-center w-10 h-10 top-2/3 left-1/3 bg-white z-2 dark:bg-primary-500">
            <PlusOutlined className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white" />
          </button>
          <div className=" w-28 flex items-center justify-center shadow-md bg-white dark:text-primary-50 dark:bg-primary-500 h-12 rounded-bl-xl rounded-br-xl">
            <p className="font-medium">Tạo Tin</p>
          </div>
        </div>
        {stories.map((story) => (
          <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile} />
        ))}
      </div>
      {isArrowLeftVisible && (
        <div className="absolute top-1/3 left-3 z-1">
          <div
            className="flex items-center justify-center rounded-full cursor-pointer bg-gray-50 dark:bg-primary-400 dark:text-white w-12 h-12
            hover:bg-gray-200 dark:hover:bg-primary-300 duration-200"
            onClick={handleClickLeft}
          >
            <ArrowIconLeft />
          </div>
        </div>
      )}

      <div className="absolute top-1/3 right-3 z-1">
        <div
          className="flex items-center justify-center rounded-full cursor-pointer bg-gray-50 dark:bg-primary-400 dark:text-white w-12 h-12
          hover:bg-gray-200 dark:hover:bg-primary-300 duration-200"
          onClick={handleClickRight}
        >
          <ArrowIconRight />
        </div>
      </div>
    </div>
  );
}

export default Stories;
