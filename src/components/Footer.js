import { ReactComponent as Copy } from "../Assets/copyright-regular.svg"
import { ReactComponent as GitHub } from '../Assets/github.svg'
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg'
import { ReactComponent as Gmail } from '../Assets/Gmail.svg'
import { ReactComponent as User } from '../Assets/user-regular.svg'
import { ReactComponent as Phone } from '../Assets/phone-solid.svg'
import { ReactComponent as Location } from '../Assets/location-dot-solid.svg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerItems">
                <div className="linksicon">
                    <a className="Gittext" href="https://github.com/PavanKadagi"  target='_blank'><GitHub className="github" /> </a>
                    <br></br>
                    <a className="Gittext" href="https://www.linkedin.com/in/pavan-kadagi/"  target='_blank'><Linkedin className="linkedin" /> </a>
                    <br></br>
                    <a className="Gittext" href="mailto:pavankadagi@gmail.com"  target='_blank'><Gmail className="Gmail"/> </a>
                </div>
                <div className="textData">
                    <ul>
                            <li><i class="fad fa-user-check"></i> <span className="Services">Services</span> </li>
                            <li><a  href="#"> HTML</a></li>
                            <li><a  href="#"> CSS</a></li>
                            <li><a href="#"> JavaScript</a></li>
                            <li><a  href="#"> React Js</a></li>
                            <li><a  href="#"> Express js</a></li>
                            <li><a  href="#">Node</a></li>
                            <li><a  href="#">MongoDB</a></li>
                    </ul>
                </div>
                <div className="textData">
                    <ul   >
                            <li ><i class="fad fa-user-check"></i> <span className="Contact">Contact</span> </li>
                            <li ><a href="#"><User className="User"/> Name : Pavan Kadagi </a></li>
                            <li><a  href="mailto:pavankadagi@gmail.com"  target='_blank'><Gmail className="User"/> Email : pavankadagi@gmail@gmail.com</a></li>
                            <li><a  href="tel:+919156260067"  target='_blank'><Phone className="User" /> Contact : +91-9156260067</a></li>
                            <li><a  href="#"><Location class="User" /> Address : Pune,maharashtra, India</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="copyRight"> <Copy className="c"  /> 2023 Copy rights: Pavan Kadagi</div>
        </div>
    )
}