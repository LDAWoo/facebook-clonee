import PropTypes from 'prop-types'
import { createContext, useEffect, useRef, useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const active ={
    bookActive: true,
    reelActive: false
}

const encryptionKey = "your-encryption-key";

function AppProvider({children}) {
    const [isOnline,setIsOnline] = useState(navigator.onLine);

    useEffect(() =>{
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline",handleOffline)

        return () =>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])

    const handleOnline = () =>{
        setIsOnline(true)
    }

    const handleOffline = () =>{
        setIsOnline(false)
    }


    const storedUser = localStorage.getItem("user");
    let userDateStorage =  {};

    if(typeof storedUser === 'string'){
        userDateStorage = decryptData(storedUser)
    }

    const navigate = useNavigate()
    const userRef = useRef()
    
    const [user, setUser] = useState(userDateStorage);

    console.log(user);
    
    const [userLogin,setUserLogin] = useState(null)
    const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
    const [isAddImageVisible, setIsAddImageVisible] = useState(false)
    const [isActiveStories, setIsActiveStories] = useState(active)
    const [isCreateAccountVisible, setIsCreateAccountVisible] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            // navigate("/")
        }else{
            // navigate("/Login")
        }
    }, [userLogin]);

    useEffect(() => {
        userRef.current = user
      }, [user]);

    useEffect(() =>{
        const handleStorageChange = (e) =>{
            if(e.key === "user" && (e.newValue == null || e.newValue !== user.current)){
                setUser({})
                // navigate("/Login")
            }
        }

        window.addEventListener("storage",handleStorageChange)

        return () =>{
            window.removeEventListener('storage',handleStorageChange);
        }
    },[navigate,user])

    return ( 
        <AppContext.Provider 
        value={{
            isOnline,setIsOnline,
            isCreatePostVisible, 
            setIsCreatePostVisible,
            isAddImageVisible, 
            setIsAddImageVisible,
            isActiveStories, 
            setIsActiveStories,
            isCreateAccountVisible, 
            setIsCreateAccountVisible,
            user, 
            setUser,
            userLogin,setUserLogin

            }}>
            {children}
        </AppContext.Provider>
     );
}

export const decryptData = (encryptedData) => {
    if(typeof encryptedData === 'string'){
        try{
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
        }catch(error){
            return null;
        }
        
    }
    return encryptedData;
};

export const encryptData = (data)=>{
    if(typeof data === 'string'){
        return data;
    }

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data),encryptionKey).toString();
    return encryptedData;
}

export const checkImageURL = async(url,defaultURL) =>{
    return new Promise((resolve) =>{
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror= () => resolve(defaultURL);
        img.src = url;
    })
}

AppProvider.propTypes ={
    children: PropTypes.elementType
}

export default AppProvider;