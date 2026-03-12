import { useNavigate } from "react-router-dom";

const InstructorCourseCard = ({ course }) => {
  const navigate = useNavigate();

  if (!course) return null;

  const handleDelete = () => {
    const stored =
      JSON.parse(localStorage.getItem("instructorCourses")) || [];

    const updated = stored.filter((c) => c.id !== course.id);

    localStorage.setItem(
      "instructorCourses",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-400/40 transition">

      {/* IMAGE */}
      <div className="h-40 w-full relative">
        <img
          src={course.image || "https://via.placeholder.com/400"}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold
              ${
                course.status === "Published"
                  ? "bg-green-500 text-black"
                  : "bg-yellow-400 text-black"
              }`}
          >
            {course.status}
          </span>

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h4 className="text-white font-semibold text-lg">
          {course.title}
        </h4>

        <p className="text-sm text-zinc-400">
          By {course.instructorName || "Unknown Instructor"}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 pt-3">

          <button
            onClick={() =>
              navigate(`/instructor/edit-course/${course.id}`)
            }
            className="text-xs border border-amber-400 text-amber-400 px-3 py-1 rounded hover:bg-amber-400 hover:text-black transition"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="text-xs border border-red-400 text-red-400 px-3 py-1 rounded hover:bg-red-400 hover:text-black transition">
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default InstructorCourseCard;