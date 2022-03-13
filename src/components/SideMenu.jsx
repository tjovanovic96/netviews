import { BsCalendar3, BsFillQuestionCircleFill } from "react-icons/bs"
import { BiLayer } from "react-icons/bi"
import { MdOndemandVideo } from "react-icons/md"
import "../css/SideMenu.css";


const SideMenu = () => {
    
    return (
        <div className="side-menu">
                <BsCalendar3 className="menu-icon" />
                <BiLayer className="menu-icon" />
                <MdOndemandVideo className="menu-icon"/>
                <BsFillQuestionCircleFill className="menu-icon"/>
        </div>
    )
}

export default SideMenu;