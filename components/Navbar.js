export default function Navbar(props) {
  return (
    <div className="w-full flex justify-center bg-black">
      <ul className="flex space-x-2">
        {props.children}
      </ul>
    </div>
  );
} 