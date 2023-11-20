import { useRef, useState } from "react";
import { ArrowIconLeft, ArrowIconRight, ReelIcon } from "../../../components/icons/icons";
import classNames from "classnames/bind";
import styles from "./Reels.css";
import ReelsCard from "./ReelsCard";

const cx = classNames.bind(styles);
const reels = [
  {
    id: 1,
    src: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.36329-10/340497946_596918419029404_4593164452818833511_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=sB_6lbdg1MMAX8iNHrK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfD8x5fr9L0AI-RqWvnP8tGoHV4HVxwq2gLFK3DVp0qAlw&oe=649FB500",
    views: "224k",
  },
  {
    id: 2,
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/345007061_949506062866484_7082797359355663853_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=tLZx_3ZpkmIAX8umDDa&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCcveN55biRgM72TysAwpBQ5hKJvcybYneQ8aHSSWuECw&oe=649DFF84",
    views: "91k",
  },
  {
    id: 3,
    src: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t15.5256-10/344041955_1278076499469459_845959530790278106_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=VRqWFTBdRhsAX8dZRaG&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDxmI0FyqUqaV9j6s5xM2aZWD5MQE0b9czpIPpGn6vkww&oe=649EE83D",
    views: "112k",
  },
  {
    id: 4,
    src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t51.36329-10/345919373_707905304444309_8656780695247994575_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=x2VcRjBNWLoAX-OIL1i&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBFjc64R7lTrSRjfrbKH7GHMENmamDrugA5ZCmFADdz3g&oe=649F16DB",
    views: "249k",
  },
];

function Reels() {
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const scrollRef = useRef();

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
        <div className="flex-col flex items-center justify-center relative cursor-pointer hover:opacity-90">
          <div className="flex items-end justify-center  relative rounded-xl border-t-deep-orange-500 h-52 w-28 bg-gradient-to-tr  to-pink-400  from-orange-300 ">
            <div className="flex items-center justify-center absolute top-20 left-7 rounded-full h-14 w-14 bg-white text-pink-400">
              <ReelIcon w={30} h={30} />
            </div>
            <p className=" font-medium text-white text-sm">Tạo thước phim</p>
          </div>
          <div className="absolute rounded-xl bg-gradient-to-tr  to-pink-400 from-pink-500 w-6 h-6 bottom-16 right-6"></div>
          <div className={cx("button-circle-reel")}>
            <p className="font-bold text-lg text-blue-500">+</p>
          </div>
        </div>
        {reels.map((reel) => (
          <ReelsCard key={reel.id} src={reel.src} views={reel.views} />
        ))}
      </div>
      {isArrowLeftVisible && (
        <div className="absolute top-1/3 left-3 z-50">
          <div
            className="flex items-center justify-center rounded-full cursor-pointer bg-gray-50 dark:bg-primary-400 dark:text-white w-12 h-12
            hover:bg-gray-200 dark:hover:bg-primary-300 duration-200"
            onClick={handleClickLeft}
          >
            <ArrowIconLeft />
          </div>
        </div>
      )}

      <div className="absolute top-1/3 right-3 z-50">
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

export default Reels;
