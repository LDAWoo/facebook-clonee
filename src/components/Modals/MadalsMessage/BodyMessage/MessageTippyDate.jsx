import Tippy from "@tippyjs/react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/AppThemeProvider";
import PropTypes from 'prop-types'

function MessageTippyDate({children,date}) {
    const {isDarkMode} = useContext(ThemeContext);

    return ( 
        <Tippy 
        width={300}
        className={`${isDarkMode === "dark" ? 'bg-primary-50 text-primary-400' : 'bg-primary-700 text-primary-50'} p-1 rounded-lg`}
        content={date}
        placement="left"
        >
            {children}
        </Tippy>
     );
}

MessageTippyDate.propTypes = {
    date: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default MessageTippyDate;