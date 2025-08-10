import './Navbar.css'
import logo from '../../assets/img/logo.png';


function Navbar() {
  return (
    <nav className="flex bg-[#ff9f64] shadow-xl justify-between items-center sm:px-10 px-7 py-2">
      
      
        {/* Logo */}
        <div className="sm:w-15 w-12">
          <img src={logo} alt="LOGO" className="w-full h-full" />
        </div>

        {/* Nav Links */}
        <ul className="flex gap-5 sm:gap-10">
          <li className="font-bold cursor-pointer">Home</li>
          <li className="font-bold cursor-pointer">Contact</li>
          <li className="font-bold cursor-pointer">Help Us</li>
        </ul>
      
    </nav>
  );
}


export default Navbar;