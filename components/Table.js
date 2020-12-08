import TableList from "./TableList"

export default function Table(props) {
  const cars = props.cars;
  const list = [];
  for(const car of cars) {
    list.push(<TableList car={car} key={car.id}/>)
  }
  
  return (
    <div>
      <table>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Length</th>
          <th>Height</th>
          <th>Width</th>
          <th>Price</th>
        </tr>
        {list}
      </table>
    </div>
  )
}