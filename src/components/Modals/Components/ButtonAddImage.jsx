import { CloseOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "../../Contexts/AppProvider";

function ButtonAddImage() {
  const { setIsAddImageVisible } = useContext(AppContext);

  const handleAddImage = (e) => {
    e.stopPropagation();
    console.log("Image");
  };

  const handleCloseImage = (e) => {
    e.stopPropagation();
    setIsAddImageVisible(false);
  };

  return (
    <div className="flex flex-col rounded-md border border-solid border-gray-300 h-64 p-2">
      <div className="flex relative items-center cursor-pointer justify-center flex-grow rounded-md h-40 bg-gray-100 hover:bg-gray-200" onClick={handleAddImage}>
        <div
          className="flex absolute cursor-pointer right-2 top-2 z-50 items-center justify-center border border-solid border-gray-400 rounded-full bg-white h-7 w-7
                                hover:bg-gray-200"
          onClick={handleCloseImage}
        >
          <CloseOutlined style={{ fontSize: "16px" }} />
        </div>
        {/* <div className="flex flex-col items-center justify-center">
                                        <div className="flex rounded-full items-center justify-center bg-gray-300 h-10 w-10">
                                        <FontAwesomeIcon
                                        size="lg"
                                        icon={faImage} />
                                        </div>
                                        <p className="text-lg font-medium">Thêm ảnh/video</p>
                                        <p className="text-xs">hoặc kéo và thả</p>
                                </div> */}
      </div>

      {/* <div className="flex rounded-md items-center justify-around bg-gray-100 h-16 mt-3 ">                            
                                    <div className="flex rounded-full items-center justify-center bg-gray-300 h-10 w-10">
                                            <FontAwesomeIcon icon={faMobileScreen}/>
                                    </div>
                                    <p>Thêm ảnh và video từ thiết bị di động</p>
                                    <button className="flex items-center rounded-md bg-gray-300 p-2 font-medium">Thêm</button>                             
                            </div>    */}
    </div>
  );
}

export default ButtonAddImage;
