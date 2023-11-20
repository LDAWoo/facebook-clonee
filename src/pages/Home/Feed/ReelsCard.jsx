import { Image } from "antd";

function ReelsCard({ ...props }) {
  return (
    <div className="relative h-52 cursor-pointer">
      <Image className="relative rounded-xl object-cover" src={props.src} width={112} height={208} preview={false} />
      {/* <div className="flex items-center justify-center absolute bottom-2 left-4 font-medium text-white text-sm z-50">
                <FontAwesomeIcon icon={faPlay} className="mr-2"/>
                {props.views}
            </div> */}
    </div>
  );
}

export default ReelsCard;
