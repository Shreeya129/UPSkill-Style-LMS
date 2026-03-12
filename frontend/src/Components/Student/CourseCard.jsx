import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/student/course/${course._id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-3">
        <img
          src={course.image}
          alt={course.title}
          className="h-36 w-full object-cover rounded"
        />

        <h4 className="font-semibold mt-2 text-sm">
          {course.title}
        </h4>

        <p className="text-xs text-gray-500">{course.author}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
