import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("STUDENT");
  const [organizationName, setOrganizationName] = useState(""); 

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("role", role);
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("organizationName", organizationName);

    if (role === "STUDENT") {
      navigate("/student/dashboard");
    } else if (role === "INSTRUCTOR") {
      navigate("/instructor/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('./Assets/LoginBG.png')] bg-cover">
      <form
        onSubmit={handleLogin}
        className="p-8 rounded-xl w-[350px] space-y-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-400">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded text-white"
        />

        {/*ORGANIZATION FIELD */}
        <input
          type="text"
          placeholder="Organization Name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="w-full px-4 py-2  border border-gray-700 rounded text-black"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-gray-700 rounded text-black"
        >
          <option value="INSTRUCTOR">Instructor</option>
          <option value="STUDENT">Student</option>
        </select>

        <button className="w-full bg-yellow-400 text-black py-2 rounded font-medium">
          Login
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="hover:text-yellow-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;