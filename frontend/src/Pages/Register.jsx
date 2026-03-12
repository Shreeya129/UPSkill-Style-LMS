import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    organizationName: "",   
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('./Assets/LoginBG.png')] bg-cover">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-xl w-[380px] shadow-lg"
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Create Account
        </h2>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
        />

        {/* ⭐ ORGANIZATION NAME */}
        <input
          type="text"
          name="organizationName"
          placeholder="Organization Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
        />

        {/* ROLE */}
        <select
          name="role"
          onChange={handleChange}
          className="w-full p-3 mb-6 text-black rounded"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold">
          Register
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;