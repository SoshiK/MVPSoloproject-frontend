import styles from "../styles/TableList.module.css";
export default function TableList (props) {
  return(
    <tr>
      <td><img className={styles.logo} src={props.car.icon}/></td>
      <td>{props.car.carname}</td>
      <td>{props.car.length}</td>
      <td>{props.car.height}</td>
      <td>{props.car.width}</td>
      <td>{props.car.price}</td>
    </tr>
  );
};