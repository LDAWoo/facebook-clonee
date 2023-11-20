import { BsDatabaseAdd, BsFillPlusCircleFill } from "react-icons/bs";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import MessageEmoji from "./MessageEmoji";
import { AppContext } from "../../../Contexts/AppProvider";
import { MessageContext } from "../../../Contexts/AppMessageProvider";
import { addDocument } from "../../../firebase/services";
import ButtonRoundedFull from "../../../Button/ButtonRounded/ButtonRoundedFull";
import { GifIcon, IconIcon, ImageIcon, SendIcon, TickerIcon } from "../../../icons/icons";
import data from "@emoji-mart/data/sets/14/facebook.json";

var background = true;

function FooterMessage({ dataMessage }) {
  const colorTopic = "text-fb-primary";
  const acceptableCharsRegex = /^[a-zA-Z0-9,;.!?"'(){}[\]:<>/\\@#$%^&*_+=|-]$/;

  const [isShowEmojiMessage, setIsShowEmojiMessage] = useState(false);
  const { user, setIsCreatePostVisible, isAddImageVisible, setIsAddImageVisible } = useContext(AppContext);
  const uid = user[0]?.uid;

  const { heightBodyMessage, setHeightBodyMessage, dataBodyMessage, setDataBodyMessage, conversationFilteredAllFriends } = useContext(MessageContext);

  const [value, setValue] = useState("");
  const [isRender, setIsRender] = useState(false);
  const inputRef = useRef();
  const inputElement = inputRef.current;
  const [contents, setContents] = useState({
    content: "",
    styles: [],
  });

  const handleOpenAddImage = () => {
    setIsAddImageVisible(true);
  };

  const [isEmojiClick, setIsEmojiClick] = useState(false);

  const handleEmojiClick = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (range.startOffset === 0 && range.endOffset === 0) {
      const editorNode = inputRef.current;
      range.selectNodeContents(editorNode);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    // Hiển thị giao diện emoji
    setIsShowEmojiMessage(!isShowEmojiMessage);
  };

  const handleGifClick = () => {
    // Handle GIF click event here
  };

  const handleSendMessage = async (event) => {
    const content1 = inputRef.current.innerText;
    const content2 = inputRef.current.innerHTML;
    console.log(content1);
    console.log(content2);

    const dataContent = convertHtmlToObject(content2);

    console.log(dataContent);

    // if (event.key === "Enter") {
    addDocument("messages", {
      Icons: [],
      Image: "",
      content: dataContent,
      background: background,
      conversationsId: dataMessage[0]?.conversationsId,
      uid,
    });

    event.preventDefault();
    inputRef.current.innerHTML = "";
    setHeightBodyMessage(337);
    setValue("");
    // }
  };

  function convertHtmlToObject(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const elements = doc.body.childNodes;
    const result = {};

    let currentIndex = 0;
    let hasTextContent = false;

    function processNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent;
        if (textContent.codePointAt(0) < 65536) {
          if (acceptableCharsRegex.test(textContent)) {
            hasTextContent = true;
          }
          result[currentIndex.toString()] = {
            type: "text",
            content: textContent,
            style: null,
          };
          currentIndex++;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.classList.contains("emoji")) {
          const content = node.querySelector("span").textContent;
          const style = {
            backgroundImage: node.style.backgroundImage,
            backgroundSize: node.style.backgroundSize,
            backgroundPosition: node.style.backgroundPosition,
          };

          result[currentIndex.toString()] = {
            type: "emoji",
            content,
            style,
          };
          currentIndex++;
        }

        if (node.childNodes && node.childNodes.length > 0) {
          for (const childNode of node.childNodes) {
            processNode(childNode);
          }
        }
      }
    }

    for (const element of elements) {
      processNode(element);
    }
    background = hasTextContent;
    return result;
  }

  useEffect(() => {
    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
      inputElement.addEventListener("input", handleChangeInput);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
        inputElement.removeEventListener("input", handleChangeInput);
      }
    };
  }, [isRender, inputElement]);

  const handle = () => {
    if (inputRef.current) {
      setIsRender(true);
      inputRef.current.focus();
    }
  };

  const handleChangeInput = () => {
    const inputText = inputRef.current.innerText;
    setValue(inputText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      const inputNode = inputRef.current;
      const selection = window.getSelection();

      const cursorPosition = selection.focusOffset;
      const range = selection.getRangeAt(0);
      const startContainer = range.startContainer;

      if (cursorPosition > 0 && startContainer.nodeType === Node.TEXT_NODE) {
        const prevNode = startContainer.previousSibling;
        if (prevNode && prevNode.nodeType === Node.ELEMENT_NODE && prevNode.tagName === "SPAN") {
          const emojiNode = prevNode;

          const newText = startContainer.nodeValue.slice(0, cursorPosition - 1) + startContainer.nodeValue.slice(cursorPosition);
          startContainer.nodeValue = newText;

          inputNode.removeChild(emojiNode);

          selection.setStart(startContainer, cursorPosition - 1);
          selection.collapse(true);

          e.preventDefault();
        }
      }
      handleChangeInput();
    }
  };

  const handleValueKey = (e) => {
    const key = e.key;

    if (acceptableCharsRegex.test(key)) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const charNode = document.createElement("span");
      charNode.textContent = key;

      range.deleteContents();
      range.insertNode(charNode);

      // range.setStartAfter(charNode);
      // range.setEndAfter(charNode);
      // selection.removeAllRanges();
      // selection.addRange(range);
      setValue(inputRef.current.innerText);
    } else if (value.length === 0) {
      e.preventDefault();
    }
  };

  const handleClickEmoji = (emoji) => {
    const id = emoji.id;
    const emojiData = data.emojis[id];

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const emojiNode = document.createElement("span");
    emojiNode.className = "emoji inline-block h-[22px] w-[22px] cursor-default mt-0 mb-0 ml-1 mr-1 text-center ";
    emojiNode.style.backgroundImage = `url(https://cdn.jsdelivr.net/npm/emoji-datasource-facebook@14.0.0/img/facebook/sheets-256/64.png)`;
    emojiNode.style.backgroundSize = "6100% 6100%";
    emojiNode.style.backgroundPosition = `${emojiData.skins[0].x * -22}px ${emojiData.skins[0].y * -22}px`;

    const emojiChild = document.createElement("span");
    emojiChild.className = "text-transparent pr-[0.15em] pl-[0.15em] text-center";
    emojiChild.textContent = emoji.native;

    emojiNode.appendChild(emojiChild);

    range.deleteContents();
    range.insertNode(emojiNode);

    const textNode = document.createTextNode("\u200B");
    emojiNode.parentNode.insertBefore(textNode, emojiNode.nextSibling);

    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    const newSelection = window.getSelection();
    newSelection.removeAllRanges();
    newSelection.addRange(range);

    handleChangeInput();
  };

  return (
    <div className="flex justify-end pt-3 pb-3 flex-shrink">
      <div className="flex h-full ml-1 mr-1 items-end justify-center translate-y-2 ">
        <div className="mb-1">
          <ButtonRoundedFull iconColor={colorTopic} size={28} Icon={<BsFillPlusCircleFill size={20} />} content="Mở hành động khác" placement="top" />
        </div>
      </div>

      <div className="relative flex-grow overflow-x-auto">
        <div className={`flex absolute left-0 bottom-0 mr-1 mb-1 z-1 duration-500  scale-1 ${value.length > 1 ? "scale-0" : ""} `}>
          <input style={{ display: "none" }} multiple type="file" />
          <ButtonRoundedFull iconColor={colorTopic} size={28} Icon={<ImageIcon />} content="Đính kèm file" placement="top" />
        </div>
        <div className={`absolute left-8 bottom-0 mr-1 mb-1 z-1 duration-500 scale-1 ${value.length > 1 ? "scale-0" : ""} `}>
          <ButtonRoundedFull iconColor={colorTopic} size={28} Icon={<TickerIcon />} content="Chọn nhãn dán" placement="top" />
        </div>

        <div className={`absolute left-16 bottom-0 mr-1 mb-1 z-1 duration-500 scale-1 ${value.length > 1 ? "scale-0" : ""} `}>
          <ButtonRoundedFull iconColor={colorTopic} size={28} Icon={<GifIcon />} content="Chọn file gif" placement="top" onClick={handleGifClick} />
        </div>
        <div className={`flex transition ${value.length > 1 ? "ml-0" : "ml-24"} `} style={{ transition: "margin .3s" }}>
          <div className="rounded-2xl flex-grow min-w-0 bg-gray-200 dark:bg-primary-500">
            <div className="flex mt-2  mb-2 ml-3 mr-8 relative flex-grow overflow-y-auto overflow-x-hidden cursor-text" onClick={handle}>
              <div
                aria-describedby=":r56:"
                aria-label="Tin nhắn"
                className={`overflow-x-hidden overflow-y-auto dark:text-primary-50 relative min-w-0 flex-grow outline-none min-h-[20px] max-h-[124px]  ${value.length > 1 ? "before:content-['']" : "after:content-['Aa'] dark:after:text-primary-200 max-h-[40px] overflow-y-hidden"}  `}
                tabIndex={0}
                contentEditable="true"
                spellCheck={true}
                suppressContentEditableWarning={true}
                role="textbox"
                data-lexical-editor="true"
                ref={inputRef}
                // onKeyDown={handleSendMessage}
                onKeyDown={handleValueKey}
                onInput={handleChangeInput}
                style={{
                  textAlign: "initial",
                  overflowWrap: "break-word",
                  userSelect: "text",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 mr-1 mb-1">
          <div>
            <ButtonRoundedFull iconColor={colorTopic} size={28} Icon={<IconIcon />} content="Chọn biểu tượng cảm xúc" placement="top" onClick={handleEmojiClick} />
          </div>
        </div>
      </div>

      <MessageEmoji isShowEmojiMessage={isShowEmojiMessage} handleClickEmoji={handleClickEmoji} />

      <div className="flex h-full ml-1 mr-1 items-end justify-center">
        {value.length > 1 ? (
          <ButtonRoundedFull iconColor={colorTopic} size={40} Icon={<SendIcon />} content="Nhấn Enter để gửi" onClick={handleSendMessage} />
        ) : (
          <ButtonRoundedFull iconColor={colorTopic} size={40} Icon={<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/28/1f923.png" alt="🤣" className="flex items-center justify-center object-contain p-2" />} content="Gửi 🤣" placement="top" />
        )}
      </div>
    </div>
  );
}

export default FooterMessage;
