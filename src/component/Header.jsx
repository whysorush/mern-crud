import { Link } from "react-router-dom"
const Header = () => {
    return (<>
        <Link to="/" style={{ paddingLeft: '10px', fontSize: '22px' }}>HomePage</Link>
        <Link to="contact-us" style={{ paddingLeft: '10px', fontSize: '22px' }}>Contact Us</Link>
        <Link to="about-us" style={{ paddingLeft: '10px', fontSize: '22px' }}>About Us</Link>

        <Link to="about-hoc" style={{ paddingLeft: '10px', fontSize: '22px' }}>About Hoc</Link>

        <Link to="finctional-components" style={{ paddingLeft: '10px', fontSize: '22px' }}>Functional Component</Link>

        <Link to="new-hooks" style={{ paddingLeft: '10px', fontSize: '22px' }}>New Hooks</Link>
    </>)
}

export default Header;