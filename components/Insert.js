import SelectMaker from "./SelectMaker";

export default function Insert(props) {
  return (
    <div>
      <SelectMaker makers={props.makers}/>
    </div>
  );
};