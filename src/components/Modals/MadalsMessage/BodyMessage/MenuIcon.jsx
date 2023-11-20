import { BsPlus } from "react-icons/bs";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import { FeelIcon, SeeMoreIcon, ShareIcon } from "../../../icons/icons";
import MenuTippyHeadless from "../../../TippyHeadless/TippyHeadlessCustom";
const w = 32;
const h = 32;

function MenuIcon({
  isVisibleIcon,
  isVisibleStateIcon,
  urlIcon,
  handleClickMessageIcon,
  onClickIcon,
  onBlurIcon,
  messageId
}) {
  const MESSAGE_ICON = [
    {
      id: 1,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/32/2764.png",
      alt: "❤",
    },
    {
      id: 2,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1/32/1f606.png",
      alt: "😆",
    },
    {
      id: 3,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/ta2/1/28/1f62e.png",
      alt: "😮",
    },
    {
      id: 4,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/tc8/1/32/1f622.png",
      alt: "😢",
    },
    {
      id: 5,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1/32/1f620.png",
      alt: "😠",
    },
    {
      id: 6,
      width: w,
      height: h,
      src: "https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1/32/1f44d.png",
      alt: "👍",
    },
  ];

  const RenderIcon = () => {
    return (
      <div className="flex" style={{ height: "52px" }}>
        <div
          className="flex pl-3 pt-1 pr-1 pb-1 rounded-[24px] bg-white dark:bg-primary-600 border-[1px] dark:border-gray-700 "
        >
          {MESSAGE_ICON.map((icon, index) => (
            <div
              key={index}
              className={`${
                urlIcon === icon.src && "bg-gray-300 dark:bg-primary-400 rounded-lg "
              } `}
              style={{ marginRight: "1px" }}
              onClick={() => handleClickMessageIcon(icon.src, icon.alt)}
            >
              <div className="inline-block z-0 relative cursor-pointer w-8 h-8 m-1">
                <img
                  width={icon.width}
                  height={icon.height}
                  src={icon.src}
                  alt={icon.alt}
                />
              </div>
            </div>
          ))}

          <ButtonRoundedFull 
          size={40}
          isTippy={false}
          isBackground
          Icon={<BsPlus size={28}/>}
          />
        </div>
      </div>
    );
  };


  return (
    <>
      <div>
        <MenuTippyHeadless 
        width={320} 
        isVisible={(isVisibleIcon.id && messageId) && isVisibleIcon.visible} 
        render={<RenderIcon />}
        placement="top"
        >
        
          <div>
            <ButtonRoundedFull
              content="Bài tỏ cảm xúc"
              iconColor="dark:text-primary-200"
              Icon={<FeelIcon />}
              size={24}
              onClick={()=> onClickIcon(messageId)}
              onBlur={onBlurIcon}
            />
          </div>
        </MenuTippyHeadless>
      </div>
      <div>
        <span>
          <ButtonRoundedFull 
          content="Trả lời" size={24} 
          Icon={<ShareIcon />} 
          iconColor="dark:text-primary-200"
          />
        </span>
      </div>                                                                 
      <div>
        <span>
          <ButtonRoundedFull
            content="Xem thêm"
            iconColor="dark:text-primary-200"
            size={24}
            Icon={<SeeMoreIcon />}
          />
        </span>
      </div>
    </>
  );
}

export default MenuIcon;
