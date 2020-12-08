import Maker from "./Maker";
import styles from "../styles/FilterMaker.module.css";
import { getSelectedMakers } from "../lib/data";
export default function FilterMaker(props) {
  let selectedMaker = [];
  const selectMaker = (num) => {
    selectedMaker.push(num);
  }
  const deleteMaker = (num) => {
    const index = selectedMaker.indexOf(num);
    selectedMaker.splice(index, 1);
  }
  const searchClick = async () => {
    const makers = selectedMaker.join("&");
    const data = await getSelectedMakers(makers);
    props.setCars(data);
    props.setIsSelected(false);
  }
  const makers = props.makers;
  const list = [];
  for(const maker of makers) {
    list.push(<Maker
      maker={maker} 
      key={maker.id} 
      selectMaker={selectMaker}
      deleteMaker={deleteMaker}
      />)
  }
  return (
    <div className={styles.filterArea}>
      <div className={styles.makerLogo}> 
        {list}
      </div>
      <div className={styles.searchButton}>
        <button onClick={searchClick}>Search</button>
      </div>
    </div>
  )
}