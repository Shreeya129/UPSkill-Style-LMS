import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginBG from "../Assets/LoginBG.png";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static logic (no backend yet)
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Changed Successfully!");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBG})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-md p-8 rounded-xl w-[350px] space-y-4 shadow-lg"
      >
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-yellow-400">
          Change Password
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded text-white focus:ring-2 focus:ring-amber-400"
        />

        {/* NEW PASSWORD */}
        <input
          type="password"
          name="newPassword"
          required
          placeholder="New Password"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded text-white focus:ring-2 focus:ring-amber-400"
        />

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded text-white focus:ring-2 focus:ring-amber-400"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-medium transition"
        >
          Update Password
        </button>

        {/* BACK TO LOGIN */}
        <p className="text-gray-400 text-sm text-center">
          <Link to="/login" className="hover:text-yellow-400">
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ChangePassword;
