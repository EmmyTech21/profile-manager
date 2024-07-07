import { FaUser } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import './Nav.css'
export default function Nav() {
  return (
    <div className="nav-sec">
        <nav>
            <FaUser  style={{width:40, height:50}}/>
            <span>
                <h1>Emmy Tech</h1>
                <p>Software developer</p>
            </span>
        </nav>
        <BsArrowLeftRight  style={{width:40, height:50, margin: 20,}}/>
    </div>
  )
}
