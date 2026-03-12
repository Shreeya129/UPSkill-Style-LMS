import { Routes, Route } from "react-router-dom";

// Public
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import CourseCardsPage from "./Pages/CourseCardsPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Student
import StudentLayout from "./Layout/StudentLayout";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import PublicProfile from "./Pages/Student/PublicProfile";
import EditProfile from "./Pages/Student/EditProfile";
import Logout from "./Pages/Student/Logout";
import CourseDetails from "./Pages/Student/CourseDetails";
import ChangePassword from "./Pages/ChangePassword";

//Instructor
import InstructorLayout from "./Layout/InstructorLayout";
import InstructorDashboard from "./Pages/Instructor/InstructorDashboard";
import CreateCourse from "./Pages/Instructor/CreateCourses";
import EditCourse from "./Pages/Instructor/EditCourse";


function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseCardsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route>
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>

      {/* STUDENT ROUTES */}
      <Route element={<StudentLayout />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/course/:id" element={<CourseDetails />} />
        <Route path="/student/profile" element={<PublicProfile />} />
        <Route path="/student/profile/edit" element={<EditProfile />} />
        <Route path="/student/logout" element={<Logout />} />
      </Route>

      <Route element={<InstructorLayout />}>
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/CreateCourse" element={<CreateCourse />} />
        <Route path="/instructor/edit-course/:id" element={<EditCourse />} />
      </Route>

    </Routes>
  );
}

export default App;
