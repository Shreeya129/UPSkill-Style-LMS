import { Link } from "react-router-dom";

const CreateCourseCard = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8 flex items-center justify-between">
      <div>
        <h3 className="text-lg text-white font-semibold">
          Create a New Course
        </h3>
        <p className="text-zinc-400 text-sm">
          Start building your course content.
        </p>
      </div>

      <Link
        to="/instructor/CreateCourse"
        className="bg-amber-400 text-black px-4 py-2 rounded-lg hover:bg-amber-500">
          + Create Course
      </Link>
    </div>
  );
};

export default CreateCourseCard;
