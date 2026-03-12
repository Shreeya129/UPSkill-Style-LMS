import BgImage from "../../Assets/BgImage.jpeg";

const WelcomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2 items-center">

        <div className="p-10 lg:p-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center">
              ST
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Welcome back, Shreeya 👋
              </h2>
              <p className="text-sm text-zinc-400">
                Web Developer
              </p>
            </div>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 max-w-md">
            <h3 className="text-lg text-white mb-2">
              Courses from ₹379
            </h3>

            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition">
              Save now
            </button>
          </div>
        </div>

        <div
          className="hidden md:block min-h-[380px] bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
