import './style.css'
import {ReactComponent as Logo, ReactComponent} from './logo.svg';

function Navbar(){
    return(
        <nav className = "main-navbar"> 
        <Logo />
        <a href="home" className = "logo-text">DS delivery</a>
        </nav>
    )
}

export default Navbar;