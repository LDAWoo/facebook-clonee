import Post from "./Post";

const avatar1 = "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-1/154637449_491026842303022_1142055533235868397_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yYfU6G4LubwAX8vlypk&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDgacyj3OI22CbpNcBIrST683RbfmT0SBSvZGHkZshWeQ&oe=64BDD032";
const avatar2 = "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/332223660_1416112119133731_385472981574515930_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=1ysDT5LmOM4AX-CQr1M&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAG1wlfbmTmXjk3yCaYXGWN2TVP3b5FuIHkRn72qRISfg&oe=649B0AC4";
const avatar3 = "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/332371293_514135247459707_470585252245096074_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=rwIwAjpsvcUAX9rMQeB&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBULfamVpY4hUjMVV2bCrzXDgOiHSeNMVS_BqiQhXAORw&oe=649C5E27";

const postImage1 = "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/353394623_293836892999920_8252722835748439789_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3OuGNxTiBAwAX8ZHYy8&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDzrVCx8hIzE5lt-745d5yHlSrLgLTX5EhtVvuhQ9YLFQ&oe=649BC2B5";
const postImage2 = "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/356344313_1981953985492715_2860537896985171633_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=N97FyeiCKG4AX_ZWSEV&_nc_ht=scontent.fhan3-5.fna&oh=00_AfA_lXO6M9a2JqFODbqRIRLpxYU0nzft1lBkOO3HeVKcRA&oe=649B4A9E";
const postImage3 = "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/355714371_831005698381758_1174455587505385987_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=2doW4VevsdkAX-xg2a_&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPIAjZ-gF6lI9JpohsSoB2nP3k6LXU7hU5FoYXY9UU9g&oe=649B5E56";
const data = [
  {
    email: "leducanhvu@gmail.com",
    image: avatar1,
    message: "Today i will learn more react js full courses",
    name: "Vu Lee",
    postImage: postImage1,
    timeStamp: "1h",
  },
  {
    email: "kakashivu@gmail.com",
    image: avatar2,
    message: "The Kakashi is a ninja",
    name: "Kakashi",
    postImage: postImage2,
    timeStamp: "2h",
  },
  {
    email: "woolee2003@gmail.com",
    image: avatar3,
    message: "Phía sau một người đội trưởng là một trách nhiệm to lớn.",
    name: "LeVi",
    postImage: postImage3,
    timeStamp: "1h",
  },
];
function Posts() {
  return (
    <div>
      {data.map((post) => (
        <Post key={post.image} name={post.name} email={post.email} message={post.message} image={post.image} postImage={post.postImage} timeStamp={post.timeStamp} />
      ))}
    </div>
  );
}

export default Posts;
