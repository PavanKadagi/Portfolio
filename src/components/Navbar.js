import myPic from '../Assets/myPic.jpg'
export default function Navbar() {
    return (
        <div className="navBar">
            <ul className="list">
                <div className="listItems">
                    <li >HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>PROJECTS</li>
                </div>
                <div className="listItemspic">
                   <li><img className='myPic' src={myPic} /></li>
                </div>
            </ul>
            <div className="mySelf">
                <h4 className="name">My name is</h4>
                <h2 className='name1'>Pavan Kadagi</h2>
                <div>I am Web Developer </div>
                <p className='content'>FullStack developer & Passion for Building new Projects
                            with new Challenges to solve with full functionality.
                            Strong Javascript & React Js. There are three responses to
                            a piece of design – yes, no, and WOW! Wow is the one to
                            aim for.
                </p>
                <hr></hr>
                <span className='contact'>Contact: </span> <a className='phone' href="tel:+919156260067">+919156260067</a>
                <br></br>
                <span className='gmail'>Gmail: </span><a className='mail' href="mailto:pavankadagi@gmail.com">pavankadagi@gmail.com</a>
            </div>
        </div>
    )
}