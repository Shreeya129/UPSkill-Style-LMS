import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import InstructorNavbar from "../Components/Instructor/InstructorNavBar";


const InstructorLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1f27] to-[#111318]">
      <InstructorNavbar/>
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default InstructorLayout;
