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
    <div className="py-2">
      <table className="table-fixed border border-collapse border-blue-400">
        <thead>
          <tr>
            <th className="border border-blue-400 font-normal w-16">Logo</th>
            <th className="border border-blue-400 font-normal w-20">Name</th>
            <th onClick={clickButton} className="border border-blue-400 font-normal w-16">Length</th>
            <th onClick={clickButton} className="border border-blue-400 font-normal w-16">Height</th>
            <th onClick={clickButton} className="border border-blue-400 font-normal w-16">Width</th>
            <th onClick={clickButton} className="border border-blue-400 font-normal w-20">Price</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}