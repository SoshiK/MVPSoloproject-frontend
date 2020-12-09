export default function SelectMaker(props) {
  const makers = props.makers;
  const list = [];
  for(const maker of makers) {
    list.push(<option value={maker.id} key={maker.id}>{maker.name}</option>)
  }
  return(
    <div>
      <select name="maker_id">
        <option value={1}>example</option>
        {list}
      </select>
    </div>
  );
};