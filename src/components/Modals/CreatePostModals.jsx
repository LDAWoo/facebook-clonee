import { Modal } from "antd";
import { useContext } from "react";
import { AppContext } from "../../components/Contexts/AppProvider";
import ModalsCreatePostCustom from "./ModalsCreatePostCustom";

function CreatePostModals() {
  const { isCreatePostVisible, setIsCreatePostVisible } = useContext(AppContext);

  const handleCancel = () => {
    setIsCreatePostVisible(false);
  };

  return (
    <div>
      <Modal open={isCreatePostVisible} onCancel={handleCancel} footer={[]}>
        <ModalsCreatePostCustom />
      </Modal>
    </div>
  );
}

export default CreatePostModals;
