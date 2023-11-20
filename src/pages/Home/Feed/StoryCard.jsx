import { Avatar, Image } from "antd";

function StoryCard( {...props} ) {
    return ( 
        <div className="relative h-52 cursor-pointer">
            <Image
            className="relative rounded-xl object-cover"
            src={props.src}
            width={112}
            height={208}
            preview={false}
            />
            <div className="absolute top-3 left-3 w-10 h-10 
            rounded-full bg-blue-800 flex items-center justify-center
            z-1">
                <Avatar
                size={34}
                className="object-cover"
                src={props.profile}
                />
            </div>
        </div>
     );
}

export default StoryCard; 