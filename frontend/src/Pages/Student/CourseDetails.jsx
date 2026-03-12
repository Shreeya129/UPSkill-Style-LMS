import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

/* -------- STATIC DATA -------- */
const courses = [
  {
    _id: "1",
    title: "Ethereum & Solidity",
    description:
      "Learn blockchain development from scratch including smart contracts and Web3 fundamentals.",
    outcome:
      "After completing this course you will be able to build decentralized applications.",
    videos: [
      "https://www.youtube.com/embed/gyMwXuJrbJQ",
      "https://www.youtube.com/embed/M576WGiDBdQ",
    ],
  },
  {
    _id: "2",
    title: "ReactJS Complete Guide",
    description:
      "Master React from basics to advanced concepts including hooks and routing.",
    outcome:
      "Build real-world React dashboards and applications.",
    videos: [
      "https://www.youtube.com/embed/bMknfKXIFA8",
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Pending");

  const course = courses.find((c) => c._id === id);

  if (!course) return <p className="text-white">Course not found</p>;

  return (
    <div className="text-white space-y-10">

      {/* ---------- DASHBOARD BUTTON (TOP) ---------- */}
      <button
        onClick={() => navigate("/student/dashboard")}
        className="px-4 py-2 text-amber-400 rounded-lg hover:bg-gray-800 transition"
      >
        ← Dashboard
      </button>

      {/* ---------- TITLE + STATUS ROW ---------- */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-lg flex items-center justify-between flex-wrap gap-4">

        <div>
          <h1 className="text-3xl font-bold text-amber-400">
            {course.title}
          </h1>

          <p className="text-zinc-300 mt-2 max-w-2xl">
            {course.description}
          </p>
        </div>

        {/* STATUS DROPDOWN */}
        <div className="flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 px-4 py-2 rounded-lg">
          <span className="text-sm text-amber-300">
            Status:
          </span>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-zinc-900 border border-amber-400/40 rounded-md px-3 py-1 text-white focus:ring-2 focus:ring-amber-400"
          >
            <option>Pending</option>
            <option>Done</option>
          </select>
        </div>

      </div>

      {/* ---------- VIDEO CONTENT ---------- */}
      <div>
        <h3 className="text-xl font-semibold text-amber-400 mb-4">
          Course Content
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {course.videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:shadow-xl hover:border-amber-400/40 transition"
            >
              <iframe
                src={video}
                title="Course Video"
                className="w-full h-64"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- OUTCOME (LAST) ---------- */}
      <div className="bg-gradient-to-r from-amber-400/10 to-yellow-300/10 border border-amber-400/20 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-amber-400 mb-2">
          🎯 Course Outcome
        </h3>

        <p className="text-zinc-300">
          {course.outcome}
        </p>
      </div>

    </div>
  );
};

export default CourseDetails;
