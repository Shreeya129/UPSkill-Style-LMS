import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem =
    "hover:text-yellow-400 transition-colors duration-200";

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] to-[#020617] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-yellow-400">
          UP<span className="text-white">Skill</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300">
          {["/", "/courses", "/about", "/contact"].map((path, i) => (
            <li key={path}>
              <NavLink to={path} className={navItem}>
                {["Home","Courses","About","Contact"][i]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/login" className="text-white hover:text-yellow-400">
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium">
            Register
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-white text-xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-300">
          <NavLink to="/" onClick={()=>setIsOpen(false)}>Home</NavLink>
          <NavLink to="/courses" onClick={()=>setIsOpen(false)}>Courses</NavLink>
          <NavLink to="/about" onClick={()=>setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={()=>setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
