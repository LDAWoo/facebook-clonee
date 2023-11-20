import { useContext, useEffect, useMemo, useState } from "react";
import Header from "./Header";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";
import { AppContext } from "../../../components/Contexts/AppProvider";
import Reels from "./Reels";

function Feed() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const { isActiveStories } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenHeight]);

  const MemoizedInputBox = useMemo(() => <InputBox />, []);
  const MemoizedPosts = useMemo(() => <Posts />, []);

  return (
    <div className="h-screen pb-44 pt-6 pr-8 pl-8 max-xl:flex-grow">
      <div className={`mx-auto max-h-7 max-w-[460px] min-lg:max-w-[500px]`}>
        <div className="shadow-sm bg-white dark:bg-primary-600 rounded-xl p-3">
          {/* Header */}
          <Header />
          {/* Stories && Reels */}
          {isActiveStories.bookActive ? <Stories /> : <Reels />}
        </div>
        {/* InputBox */}
        {MemoizedInputBox}
        {/* Post */}
        {MemoizedPosts}
      </div>
    </div>
  );
}

export default Feed;
