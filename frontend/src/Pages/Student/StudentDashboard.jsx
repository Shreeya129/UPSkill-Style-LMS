import WelcomeBanner from "../../Components/Student/WelcomeBanner";
import ContinueLearning from "../../Components/Student/ContinueLearning";
import RecommendedCourses from "../../Components/Student/RecommendedCourse";
import FeaturedCourses from "../../Components/Student/FeaturedCourses";
import StudentCoursesSection from "../../Components/Student/StudentCourseSection";


const StudentDashboard = () => {
  return (
    <div className="space-y-10">
      <WelcomeBanner />
      <ContinueLearning />
      <StudentCoursesSection/>
      <RecommendedCourses />
      <FeaturedCourses />
    </div>
  );
};

export default StudentDashboard;
