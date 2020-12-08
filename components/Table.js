import { getSortedCars } from "../lib/data";
import TableList from "./TableList"

export default function Table(props) {
  const cars = props.cars;
  const list = [];
  for(const car of cars) {
    list.push(<TableList car={car} key={car.id}/>)
  }
  const clickButton = async (e) => {
    const order = e.target.outerText.toLowerCase();
    const data = await getSortedCars(order);
    props.setCars(data);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th onClick={clickButton}>Length</th>
            <th onClick={clickButton}>Height</th>
            <th onClick={clickButton}>Width</th>
            <th onClick={clickButton}>Price</th>
          </tr>
          {list}
        </tbody>
      </table>
    </div>
  )
}