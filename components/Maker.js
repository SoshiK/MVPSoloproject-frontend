import styles from "../styles/Maker.module.css";
import { useState } from "react";
export default function Maker(props) {
  const [isClicked, setIsClicked] = useState(false);
  const logoClick = (e) => {
    if(!isClicked) {
      e.target.className = styles.logoClick;
      props.selectMaker(props.maker.id);
    } else {
      e.target.className = styles.logo;
      props.deleteMaker(props.maker.id);
    }
    setIsClicked(!isClicked);
  }
  return (
    <div>
      <img 
        src={props.maker.icon}
        className={styles.logo}
        onClick={logoClick}
      ></img>
    </div>
  );
}