import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] text-white flex flex-row absolute z-10 backdrop-blur-xl">
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
