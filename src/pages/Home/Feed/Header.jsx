import HeaderButtonActive from "./HeaderButtonActive";
import { BookIcon, ReelIcon } from ".././../../components/icons/icons";
import { useContext } from "react";
import { AppContext } from "../../../components/Contexts/AppProvider";

function Header() {
  const { isActiveStories, setIsActiveStories } = useContext(AppContext);

  const handleClickBook = () => {
    setIsActiveStories({
      bookActive: true,
      reelActive: false,
    });
  };

  const handleClickReel = () => {
    setIsActiveStories({
      bookActive: false,
      reelActive: true,
    });
  };

  return (
    <div className="flex justify-between space-x-2">
      <HeaderButtonActive active={isActiveStories.bookActive} Icon={<BookIcon w={20} h={20} />} title="Tin" handleClick={handleClickBook} />

      <HeaderButtonActive active={isActiveStories.reelActive} Icon={<ReelIcon w={20} h={20} />} title="Reels" handleClick={handleClickReel} />
    </div>
  );
}

export default Header;
