import { useEffect, useState } from "react";
import InstructorCourseCard from "./InstructorCourseCard";

const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("instructorCourses")) || [];
    setCourses(stored);
  }, []);

  return (
    <section>
      <h3 className="text-lg text-white font-semibold mb-4">
        My Courses
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.length === 0 ? (
          <p className="text-zinc-400">No courses created yet.</p>
        ) : (
          courses.map((c) => (
            <InstructorCourseCard key={c.id} course={c} />
          ))
        )}
      </div>
    </section>
  );
};

export default InstructorCourses;
