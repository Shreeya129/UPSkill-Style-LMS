import { NavLink } from "react-router-dom";

const InstructorSidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#111318] border-r border-zinc-800 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-amber-400">
            Instructor Menu
          </h2>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-2 p-4 text-sm">

          <NavLink
            to="/instructor/dashboard"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded hover:bg-zinc-900 text-zinc-300 hover:text-amber-400"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/instructor/create-course"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded hover:bg-zinc-900 text-zinc-300 hover:text-amber-400"
          >
            Create Course
          </NavLink>

          <NavLink
            to="/instructor/my-courses"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded hover:bg-zinc-900 text-zinc-300 hover:text-amber-400"
          >
            My Courses
          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded hover:bg-zinc-900 text-red-400"
          >
            Logout
          </NavLink>

        </nav>
      </aside>
    </>
  );
};

export default InstructorSidebar;
