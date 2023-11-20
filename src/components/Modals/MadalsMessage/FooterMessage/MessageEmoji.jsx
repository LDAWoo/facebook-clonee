import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/AppThemeProvider";
import data from "@emoji-mart/data/sets/14/facebook.json";
import Picker from "@emoji-mart/react";

function MessageEmoji({ isShowEmojiMessage, handleClickEmoji }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      {isShowEmojiMessage && (
        <div className="absolute -top-10 ">
          <div className="relative">
            <div className="absolute top-0 right-12 border dark:border-gray-700 rounded-lg">
              <Picker native={true} onEmojiSelect={handleClickEmoji} data={data} emojiVersion="14" set="apple" locale="vi" emojiSize={30} skinTonePosition="none" previewPosition="none" navPosition="bottom" skin={1} emojiButtonRadius="6px" theme={isDarkMode} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageEmoji;
