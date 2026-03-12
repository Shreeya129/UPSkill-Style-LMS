const courses = [
  { _id: "c1", title: "NFT Web Development", progress: 35 },
  { _id: "c2", title: "100 Days of Code", progress: 12 },
];

const ContinueLearning = () => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4">
        Continue learning
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-4">
            <div className="w-24 h-14 rounded-lg bg-zinc-800 flex items-center justify-center text-xs text-white">
              {course.title.charAt(0)}
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                {course.title}
              </p>

              <div className="mt-2">
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <p className="text-[11px] text-zinc-500 mt-1">
                  {course.progress}% completed
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueLearning;
