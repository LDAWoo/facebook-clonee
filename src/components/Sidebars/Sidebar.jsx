import { DataSideBar } from "../constants/DataSideBar";
import SidebarRow from "./SidebarRow";
import { defaultImage } from "../Images/DefaultImage";

function Sidebar() {
  return (
    <div className="hidden min-lg:flex flex-col ml-3 mt-5 mb-5">
      <SidebarRow src={defaultImage} title="Vũ Lee" />

      {DataSideBar.map((sidebar, index) => (
        <div key={index}>
          <SidebarRow url={sidebar.url} urlIcon={sidebar.urlIcon} positionIcon={sidebar.positionIcon} title={sidebar.title} to={sidebar.to} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
