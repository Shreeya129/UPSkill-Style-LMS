import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    instructorName: "",
    image: "",
    description: "",
    outcome: "",
    video: "",
    status: "Pending",
  });

  /* ⭐ LOAD COURSE DATA */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("instructorCourses")) || [];

    const selectedCourse = stored.find(
      (c) => String(c.id) === String(id)
    );

    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [id]);

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  /* HANDLE UPDATE */
  const handleSubmit = (e) => {
    e.preventDefault();

    const stored =
      JSON.parse(localStorage.getItem("instructorCourses")) || [];

    const updatedCourses = stored.map((c) =>
      String(c.id) === String(id) ? course : c
    );

    localStorage.setItem(
      "instructorCourses",
      JSON.stringify(updatedCourses)
    );

    alert("Course Updated Successfully!");
    navigate("/instructor/dashboard");
  };

  return (
    <div className="text-white max-w-3xl space-y-6">

      <h1 className="text-3xl font-bold text-amber-400">
        Edit Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4 shadow-lg"
      >

        {/* TITLE */}
        <input
          name="title"
          value={course.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* ⭐ AUTHOR NAME */}
        <input
          name="instructorName"
          value={course.instructorName}
          onChange={handleChange}
          placeholder="Instructor Name"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* ⭐ IMAGE FIELD */}
        <input
          name="image"
          value={course.image}
          onChange={handleChange}
          placeholder="Course Image URL"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          rows="4"
          placeholder="Course Description"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* VIDEO */}
        <input
          name="video"
          value={course.video}
          onChange={handleChange}
          placeholder="Youtube Embed Link"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* OUTCOME */}
        <textarea
          name="outcome"
          value={course.outcome}
          onChange={handleChange}
          rows="3"
          placeholder="Course Outcome"
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        />

        {/* STATUS */}
        <select
          name="status"
          value={course.status}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded"
        >
          <option>Pending</option>
          <option>Published</option>
        </select>

        <button className="bg-amber-400 text-black px-6 py-2 rounded-lg">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;