import { Outlet } from "react-router-dom";
import StudentNavbar from "../Components/Student/StudentNavbar";
import Footer from "../Components/Footer";

const StudentLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1b1f27] to-[#111318]">

      {/* Top Navbar */}
      <StudentNavbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentLayout;
