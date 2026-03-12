import { useState } from "react";
import StudentSidebar from "./StudentSidebar";

const StudentNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <button
              aria-label="Open Sidebar"
              onClick={() => setOpen((prev) => !prev)}
              className="text-zinc-300 hover:text-amber-400 text-xl">
              ☰
            </button>

            <h1 className="text-2xl font-bold tracking-wide text-amber-400">
              UP<span className="text-white">Skill</span>
            </h1>
          </div>

          <input
            type="text"
            placeholder="Search courses, skills..."
            className="hidden md:block w-96 px-5 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <div className="flex items-center gap-6 text-sm">
            <span className="text-zinc-300 hover:text-amber-400 cursor-pointer">
              My Learning
            </span>

            <button
  onClick={() => setOpen(prev => !prev)}
  className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold hover:scale-105 transition"
>
  ST
</button>

          </div>
        </div>
      </nav>

      <StudentSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default StudentNavbar;
