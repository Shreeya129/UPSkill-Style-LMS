import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
      
      <h2 className="text-xl font-semibold text-white mb-4">
        Log out
      </h2>

      <p className="text-zinc-400 mb-6">
        Are you sure you want to log out of your account?
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
        >
          Log out
        </button>

        <button
          onClick={() => navigate(-1)}
          className="border border-zinc-700 text-zinc-300 px-6 py-2 rounded-lg hover:bg-zinc-800 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
