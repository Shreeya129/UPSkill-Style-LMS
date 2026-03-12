
import CreateCourseCard from "../../Components/Instructor/CreateCourseCard";
import InstructorCourses from "../../Components/Instructor/InstructorCourses";
import InstructorWelcomeBanner from "../../Components/Instructor/InstructorWelcome";

const InstructorDashboard = () => {
  return (
    <div className="space-y-8">  
      
      <InstructorWelcomeBanner />

      <CreateCourseCard />

      <InstructorCourses />

    </div>
  );
};

export default InstructorDashboard;
