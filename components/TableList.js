export default function TableList (props) {
  return(
    <tr>
      <td className="border border-blue-400"><img className="h-10 block mx-auto" src={props.car.icon}/></td>
      <td className="border border-blue-400 text-sm">{props.car.carname}</td>
      <td className="border border-blue-400 text-sm text-center">{props.car.length}</td>
      <td className="border border-blue-400 text-sm text-center">{props.car.height}</td>
      <td className="border border-blue-400 text-sm text-center">{props.car.width}</td>
      <td className="border border-blue-400 text-sm text-center">{props.car.price}</td>
    </tr>
  );
};