
const PublicProfile = () => {
  return (
    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full bg-amber-400 text-black flex items-center justify-center text-3xl font-bold">
          ST
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Shreeya Trivedi
          </h2>
          <p className="text-zinc-400">Web Developer</p>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          About me
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Passionate web developer focused on building modern, user-friendly
          applications using React, Tailwind CSS and MERN stack.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
