import "./header.scss";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header_container">
     <Link to="/" className="header_link"> <Logo size="medium" theme="dark" /> </Link>
      <div>
        
        <Link to="/about" className="header_button header_link">About me</Link>
        <Link to="/skills" className="header_button header_link">Skills</Link>
        <Link to="/projects" className="header_button header_link">Projects</Link>
        <Link to="/contact" className="header_button header_link">Contact</Link>
      
        
      </div>
    </div>
  )

}

export default Header;