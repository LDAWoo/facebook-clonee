import { useContext } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { database } from "../firebase/firebaseConfig";
import { AppContext, encryptData } from "../Contexts/AppProvider";

function BodyLogin() {
  const { setIsCreateAccountVisible } = useContext(AppContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setIsCreateAccountVisible(true);
  };

  const checkFieldValue = async (fieldName, operator, compareValue) => {
    const condition = {
      fieldName,
      operator,
      compareValue,
    };

    let collectionRef = query(collection(database, "users"));
    collectionRef = query(collectionRef, where(condition.fieldName, condition.operator, condition.compareValue));

    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (data.length > 0) {
          unsubscribe();
          resolve(data);
        } else {
          unsubscribe();
          resolve(null);
        }
      });
    });
  };

  const handleSubmitLogin = async () => {
    const emailValue = form.getFieldValue("email");
    const passwordValue = form.getFieldValue("password");

    console.log(emailValue);
    console.log(passwordValue);

    if (emailValue && passwordValue) {
      checkFieldValue("email", "==", emailValue)
        .then((emailData) => {
          if (emailData) {
            return emailData[0]?.password === passwordValue ? emailData : [];
          } else {
            // Email Error
            console.log("Email Error");
          }
        })
        .then((passwordData) => {
          if (passwordData) {
            console.log(passwordData);
            const encryptedUser = encryptData(passwordData);
            localStorage.setItem("user", encryptedUser);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            // Pass error
            // navigate('/Login')
            console.log("Pass Error");
          }
        })
        .catch((error) => {
          console.log(error);
          // navigate("/Login");
        });
    }
  };

  return (
    <div className="ml-10 mr-10 w-auto">
      <div className="flex items-center justify-evenly min-md:flex-row flex-col">
        <div className="">
          <div className="flex max-md:justify-center max-md:ml-0 pt-2 -ml-5">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" className="h-16" />
          </div>
          <div className="flex text-2xl max-md:justify-center">Đăng nhập gần đây</div>
          <div className="flex pb-4 max-md:justify-center">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</div>
          <div className="flex mb-5 space-x-5 max-md:justify-center">
            <div className="w-40 relative hover:shadow-2xl " style={{ transition: "all .2s ease-in-out" }}>
              {/* <div>
                <a href="/" title="Vũ Lee" className="rounded-lg">
                  <img
                    className="rounded-tl-lg rounded-tr-lg"
                    src={defaultImage} alt=""/>
                </a>
                <Tippy
                  delay={[500, 0]}
                  content="Gỡ tài khoản khỏi trang này"
                  placement="top"
                  className="bg-blue-gray-900 text-gray-200 text-sm p-2 rounded-lg"
                >
                  <div className="flex top-1 left-1 items-center justify-center cursor-pointer absolute rounded-full bg-gray-800 w-4 h-4 text-white">
                    <FontAwesomeIcon icon={faClose} width={10} height={10} />
                  </div>
                </Tippy>
              </div> */}
            </div>

            <div className="flex">
              <div
                className="flex relative cursor-pointer items-end justify-center w-40 h-52 bg-white shadow-md rounded-lg
              hover:shadow-2xl 
              "
                style={{ transition: "all .2s ease-in-out" }}
              >
                <a className="" href="/" id="">
                  <div className="flex absolute" style={{ top: "25%", left: "35%" }}>
                    <i className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white">{/* <FontAwesomeIcon icon={faPlus} /> */}</i>
                  </div>
                  <div className="text-blue-700 mb-2 text-lg">Thêm tài khoản</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Form form={form} className=" bg-white shadow-md rounded-md" method="POST" style={{ width: "396px", height: "350px" }}>
            <div className="flex-col text-center p-4 space-y-4 font-medium">
              <Form.Item name="email">
                <Input className="h-14 text-lg" type="text" name="email" placeholder="Email hoặc số điện thoại" aria-label="Email hoặc số điện thoại" autoComplete="current-email" />
              </Form.Item>
              <Form.Item name="password">
                <Input className="h-14 text-lg" type="password" name="current-password" placeholder="Mật khẩu" aria-label="Mật khẩu" autoComplete="current-password" />
              </Form.Item>

              <button className="w-full rounded-md bg-blue-600 h-12 text-white text-xl font-bold" onClick={handleSubmitLogin}>
                Đăng nhập
              </button>
            </div>
            <div className="flex-col text-center">
              <a href="/Forgot" className="text-blue-700 hover:underline hover:text-blue-700 text-lg">
                Quên mật khẩu?
              </a>
            </div>
            <div className="border-t-2 border-gray-200 m-4"></div>
            <div className="flex-col text-center">
              <button
                className="w-1/2 rounded-md bg-green-500 h-12 text-white text-lg font-bold
                  hover:bg-green-700"
                onClick={handleCreateAccount}
              >
                Tạo tài khoản mới
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BodyLogin;
