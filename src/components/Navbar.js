import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] text-white flex flex-row absolute z-10 ">
      <div>
        <Link to="/" className='text-2xl'>Weather App React</Link>
      </div>
    </div>
  );
};

export default Navbar;
