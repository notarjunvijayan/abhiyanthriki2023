import './Navbar.css'
import logo from './logo.png'
export default function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={logo}/>
                </li>
                <div className="links">
                <li>
                    <a href='#'>Events</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
                </div>
            </ul>
        </nav>
        </>
    )
}