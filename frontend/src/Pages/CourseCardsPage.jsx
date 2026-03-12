import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "ChatGPT Foundations for Teachers",
    provider: "OpenAI",
    type: "Course",
    badge: "Free",
    skills: ["Prompt Engineering", "AI Literacy", "Lesson Planning"],
    image:
      "https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Google People Management Essentials",
    provider: "Google",
    type: "Specialization",
    badge: "Free Trial",
    skills: ["Leadership", "Team Management", "Performance Reviews"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 3,
    title: "Microsoft AI Agents: Foundations to Apps",
    provider: "Microsoft",
    type: "Professional Certificate",
    badge: "Free Trial",
    skills: ["AI Agents", "Azure AI", "Application Development"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 4,
    title: "PyTorch for Deep Learning",
    provider: "DeepLearning.AI",
    type: "Professional Certificate",
    badge: "AI Skills",
    skills: ["Neural Networks", "PyTorch", "Deep Learning"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
];

const CourseCardsPage = () => {
  const navigate = useNavigate();

  /* ⭐ CLICK HANDLER */
  const handleCourseClick = (courseId) => {
    console.log("Course clicked:", courseId);

    const isAuth = localStorage.getItem("isAuth");

    // ✅ Correct auth check
    if (isAuth !== "true") {
      alert("Please login first to access this course.");
      navigate("/login");
      return;
    }

    // Later you can navigate to course details
    // navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-[80vh] bg-slate-50 px-8 py-10">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        Trending New Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}   // ⭐ CLICK HERE
            className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                className="h-40 w-full object-cover"
              />

              <span className="absolute top-3 right-3 bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
                {course.badge}
              </span>
            </div>

            <div className="p-4">
              <p className="text-sm text-slate-500 mb-1">
                {course.provider}
              </p>

              <h3 className="text-base font-semibold text-slate-800 leading-snug mb-2">
                {course.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                <span className="font-medium text-slate-800">
                  Skills you'll gain:
                </span>{" "}
                {course.skills.join(", ")}
              </p>

              <p className="text-sm text-slate-500">{course.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardsPage;