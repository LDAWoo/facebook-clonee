import PostAbout from "./PostAbout";
import PostFriend from "./PostFriend";
import PostInput from "./PostInput";
import PostPhoto from "./PostPhoto";

function ProfilePost({uid}) {
    return ( 
        <div className="flex w-full max-md:flex-col max-md:space-x-0 space-x-5">
            <div className="flex-col space-y-5">
                <PostAbout/>
                <PostPhoto/>
                <PostFriend/>
            </div>
            <div className="flex-grow max-md:mt-2 -mt-3 ">
                <div className="flex-col space-y-5">
                    <PostInput uid={uid}/>
                </div>
            </div>
        </div>
     );
}

export default ProfilePost;