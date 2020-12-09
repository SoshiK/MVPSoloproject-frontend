export default function NavItem(props) {
  return(
    <li>
      <button
        onClick={props.click}
        className={"block px-4 py-2 text-white"}>
        {props.children}
      </button>
    </li>
  );
}