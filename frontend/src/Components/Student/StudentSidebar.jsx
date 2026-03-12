import { NavLink } from "react-router-dom";

const accountItems = 
[
  "Account settings",
  "Payment methods",
  "Subscriptions",
  "Udemy credits",
  "Purchase history",
];

const StudentSidebar = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}
   
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-zinc-900 border-r border-zinc-800 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex items-center justify-between border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white">Account</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-zinc-400 hover:text-amber-400 text-xl">
            ✕
          </button>
        </div>

        <div className="p-5 space-y-6 text-sm"> 

          <div>
            <p className="uppercase text-xs tracking-wider text-zinc-500 mb-3">
              Home
            </p>
            <NavLink to="/student/dashboard" className="text-zinc-300 hover:text-amber-400 block">
              Dashboard
            </NavLink>
          </div>

          <div>
            <p className="uppercase text-xs tracking-wider text-zinc-500 mb-3">
              Account
            </p>
            <ul className="space-y-3 text-zinc-300">
              {accountItems.map((item) => (
                <li key={item} className="hover:text-amber-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-zinc-800" />

          <div>
            <p className="uppercase text-xs tracking-wider text-zinc-500 mb-3">
              Profile
            </p>
            <NavLink to="/student/profile" className="block text-white hover:text-amber-400">Profile</NavLink>
            <NavLink to="/student/profile/edit" className="block text-white hover:text-amber-400">Edit Profile</NavLink>
            <NavLink to="/student/logout" className="block text-red-400 hover:text-red-500">Log out</NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default StudentSidebar;