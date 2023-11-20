
import { useParams } from "react-router-dom";
import HeaderProfile from "./Header/HeaderProfile";
import Navbar from "./Navbar/Navbar";
import ProfilePost from "./Post/ProfilePost";
import { useEffect } from "react";

function Profile() {
  const { uid } = useParams();

  console.log(uid);

  useEffect(() =>{
  
  },[uid]);

  return (
      <div >
           <ProfilePost uid={uid} />
      </div>
  );
}



export default Profile;
