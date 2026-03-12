const EditProfile = () => {
  return (
    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      
      <h2 className="text-2xl font-semibold text-white mb-6">
        Edit profile
      </h2>

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Full name
          </label>
          <input
            type="text"
            defaultValue="Shreeya Trivedi"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Headline */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Headline
          </label>
          <input
            type="text"
            defaultValue="Web Developer"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Biography
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
            placeholder="Tell students about yourself..."
          />
          <p>
            this courses are free till 7th march!!! Do get them
          </p>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">
            Skills (comma separated)
          </label>
          <input
            type="text"
            defaultValue="React, JavaScript, Tailwind CSS"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Save changes
          </button>

          <button
            type="button"
            className="border border-zinc-700 text-zinc-300 px-6 py-2 rounded-lg hover:bg-zinc-800 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
