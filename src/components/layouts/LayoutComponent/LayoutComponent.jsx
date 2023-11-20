import PropTypes from 'prop-types'
import Header from "../../Header/Header";


function LayoutComponent({children,Sidebar}) {
 
    return ( 
        <div className="h-screen bg-gray-100 overflow-auto dark:bg-black dark:scrollbar">
            <Header/>
             <div className="flex">
                 {/*Sidebar*/}  
                 {Sidebar && <div className="bg-white dark:bg-primary-600 shadow-md h-screen min-w-[360px]"
                 >
                   <div className="relative bg-white dark:bg-primary-600 w-[360px] h-full min-md:fixed "> 
                    <Sidebar/>
                    </div>

                </div>}
             
                 {/*Content*/}
                 <div className='w-full hidden min-md:flex'>
                    {children}
                 </div>
             </div>
        </div>
     );
}

LayoutComponent.propTypes ={
    children: PropTypes.node.isRequired,
    Sidebar: PropTypes.node.isRequired
}
export default LayoutComponent;