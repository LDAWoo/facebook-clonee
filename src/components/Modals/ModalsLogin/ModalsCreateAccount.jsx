import { Modal } from "antd";
import { useContext } from "react";
import CustomModals from "./CustomModals";
import { AppContext } from "../../Contexts/AppProvider";

function ModalsCreateAccount() {
    const {isCreateAccountVisible, setIsCreateAccountVisible} = useContext(AppContext)

    const handleCancel = () =>{   
        setIsCreateAccountVisible(false);
    }

    return ( 
        <Modal
        open={isCreateAccountVisible}
        onCancel={handleCancel}
        footer={[
              
        ]}

        >
            <CustomModals/>
        </Modal>
     );
}

export default ModalsCreateAccount;