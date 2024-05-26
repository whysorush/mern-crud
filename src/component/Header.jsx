import {Link} from "react-router-dom"
const Header=()=>{
    return(<>
    <Link to="/" style={{paddingLeft : '10px' ,fontSize:'22px'}}>HomePage</Link>
    <Link to="contact-us" style={{paddingLeft : '10px',fontSize:'22px'}}>Contact Us</Link>
    <Link to="about-us" style={{paddingLeft : '10px',fontSize:'22px'}}>About Us</Link>
    </>)
    }
    
    export default Header;