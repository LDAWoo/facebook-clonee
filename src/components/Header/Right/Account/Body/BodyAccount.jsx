import { useContext, useState } from "react";
import { DATA_ITEMS_ACCOUNT } from "../../../../constants/DataAccount";

import { ThemeContext } from "../../../../Contexts/AppThemeProvider";
import HeaderAccount from "../Header/HeaderAccount";
import FooterAccount from '../Footer/FooterAccount'
import SuggestionChildren from "../../../../Suggestions/SuggestionChildren";
import SuggestionHeader from "../../../../Suggestions/SuggestionHeader";
import SuggestionItem from "../../../../Suggestions/SuggestionItem";


function BodyAccount() {
    const{setIsDarkMode} = useContext(ThemeContext);
    const [history,setHistory] = useState([{data: DATA_ITEMS_ACCOUNT}])
    const current = history[history.length - 1]
    const [isClick,setIsClick] = useState(false)
    
    const handleBack = () =>{
        setIsClick(true)
        setHistory((prev) => prev.slice(0, prev.length -1))
    }

    const handClick = (isParent,item) =>{
        setIsClick(true)
        if(isParent){
            setHistory(prev => [...prev, item.children])
        }
    }

    const handChange = (props) =>{
        if(props){
            localStorage.setItem("theme",props);
            setIsDarkMode(props)
        }
    }

    const renderItems = () =>{
        return (
            current.data.map((item, index) =>{
                const isParent = !!item.children;
                return (
                   <div key={index}>
                        {
                            isParent ? 
                            (<SuggestionItem 
                                key={index}
                                isChildren={isParent} 
                                data={item}
                                onClick={() => handClick(isParent,item)}
                                />)  
                                : 
                            (<SuggestionItem 
                                key={index}
                                isChildren={isParent} 
                                data={item}
                                onChange={handChange}
                                />
                            )
                        }
                   </div>
                )
            }))
        
    }

    setTimeout(()=>{
        setIsClick(false)
    },500)

    return ( 
        <div className={`flex-col p-2 w-full duration-500 ${isClick ? "-translate-x-96" : "-translate-x-0"}`}>
            {
                history.length > 1 ? (<SuggestionChildren  Component={SuggestionHeader} data={current} onBack={handleBack}/>) : <HeaderAccount /> 
            }
            {renderItems()}
            {
                history.length > 1 ? (<></>) : <FooterAccount  />
            }
        </div>
     );
}

export default BodyAccount;