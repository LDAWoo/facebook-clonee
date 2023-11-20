import PropTypes from "prop-types";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebars/Sidebar";
import Widgets from "../../Widgets/Widgets";
import PositionFixed from "../LayoutPosition/PositionFixed";
function DefaultLayout({ children }) {
  return (
    <div className="h-screen  bg-gray-100 dark:bg-primary-700 dark:scrollbar overflow-y-auto">
      <Header />
      <div className="flex relative flex-grow items-center justify-center">
        {/*Sidebar*/}
        <PositionFixed className="min-lg:max-w-[350px] min-lg:min-w-[280px] min-w-0" top="top-[56px]">
          <Sidebar />
        </PositionFixed>
        {/*feed*/}
        {children}
        {/*widgets*/}
        <PositionFixed className="min-md:max-w-[350px] min-md:min-w-[280px] max-w-0" top="top-[56px]">
          <Widgets />
        </PositionFixed>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
