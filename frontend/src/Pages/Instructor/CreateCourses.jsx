import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    outcome: "",
    video: "",  
    image: "",
    instructorName: "", 
    status: "Pending",
  });

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourses =
      JSON.parse(localStorage.getItem("instructorCourses")) || [];

    const newCourse = {
      id: Date.now(),
      title: course.title,
      description: course.description,
      outcome: course.outcome,
      video: course.video,
      image: course.image,
      instructorName: course.instructorName,
      status: course.status,
      students: 0,
    };

    const updatedCourses = [...existingCourses, newCourse];
    
    localStorage.setItem(
      "instructorCourses",
      JSON.stringify(updatedCourses)
    );

    alert("Course Created Successfully!");
    navigate("/instructor/dashboard");
  };

  return (
    <div className="text-white max-w-3xl space-y-6">

      <h1 className="text-3xl font-bold text-amber-400">
        Create New Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4 shadow-lg"
      >

        <input
          name="title"
          placeholder="Course Title"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          name="instructorName"
          placeholder="Instructor / Author Name"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          name="image"
          placeholder="Course Image URL"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          name="description"
          placeholder="Course Description"
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          name="video"
          placeholder="Youtube Embed Link"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          name="outcome"
          placeholder="Course Outcome"
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-amber-400"
        />

        <select
          name="status"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-zinc-800 rounded outline-none"
        >
          <option>Pending</option>
          <option>Published</option>
        </select>

        <button
          type="submit"
          className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition"
        >
          Save Course
        </button>
        <button
          type="submit"
          onClick={() => navigate("/instructor/dashboard")}
          className="bg-red-500 text-black px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;