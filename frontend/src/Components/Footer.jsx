import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        <div>
          <h3 className="text-2xl font-bold text-yellow-500">UPSkill</h3>
          <p className="mt-4 text-gray-400">
            Empowering learners with quality education anytime, anywhere.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <NavLink to="/courses" className="block hover:text-white">Courses</NavLink>
            <NavLink to="/about" className="block hover:text-white">About Us</NavLink>
            <NavLink to="/contact" className="block hover:text-white">Contact</NavLink>
            <NavLink to="/faq" className="block hover:text-white">FAQ</NavLink>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 <span className="text-blue-400">UPSkill</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
