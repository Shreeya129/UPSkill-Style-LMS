import BgImage from "../../Assets/InstructorBG.jpg";

const InstructorWelcomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden shadow-xl">

      <div className="grid md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="p-10 lg:p-14">

          {/* PROFILE */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center">
              IN
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Welcome back, Instructor 👩‍🏫
              </h2>
              <p className="text-sm text-zinc-400">
                Course Creator ·{" "}
                <span className="text-amber-400 hover:underline cursor-pointer">
                  Manage courses
                </span>
              </p>
            </div>
          </div>

          {/* INFO CARD */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 max-w-md">
            <h3 className="text-lg text-white mb-2">
              Ready to create your next course?
            </h3>

            <p className="text-zinc-400 text-sm mb-6">
              Share your knowledge with students and grow your audience.
            </p>

            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition">
              Create Now
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="hidden md:block min-h-[380px] bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
      </div>
    </div>
  );
};

export default InstructorWelcomeBanner;
