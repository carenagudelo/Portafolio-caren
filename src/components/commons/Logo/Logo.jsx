import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Logo.scss";




function Logo({size, theme}) {
  return (
      <div>
        <span className={`title title--${size} title--${theme}`} >CAREN <FontAwesomeIcon className={`icon icon--${theme}`} icon={faCode} /> AGUDELO</span>
      </div>
  );
}



export default Logo;
