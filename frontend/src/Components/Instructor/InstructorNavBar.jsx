import { useState } from "react";
import InstructorSidebar from "./InstructorSidebar";

const InstructorNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            {/* HAMBURGER */}
            <button
              aria-label="Open Sidebar"
              onClick={() => setOpen((prev) => !prev)}
              className="text-zinc-300 hover:text-amber-400 text-xl"
            >
              ☰
            </button>

            {/* LOGO */}
            <h1 className="text-2xl font-bold tracking-wide text-amber-400">
              UP<span className="text-white">Skill</span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 text-sm">

            {/* NAV TEXT */}
            <span className="text-zinc-300 hover:text-amber-400 cursor-pointer">
              My Courses
            </span>

            {/* AVATAR */}
            <button
              onClick={() => setOpen(prev => !prev)}
              className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold hover:scale-105 transition"
            >
              IN
            </button>

          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <InstructorSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default InstructorNavBar;
