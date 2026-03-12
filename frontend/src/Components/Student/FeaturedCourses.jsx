const FeaturedCourses = () => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4">
        Featured course
      </h3>

      <div className="bg-white border border-zinc-200 rounded-xl px-6 py-5 flex justify-between items-center">
        <div>
          <h4 className="text-base font-semibold text-zinc-900">
            Blockchain & Bitcoin Fundamentals
          </h4>
          <p className="text-sm text-zinc-700">
            Real-world blockchain concepts explained simply
          </p>
        </div>

        <button className="bg-amber-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-400 transition">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default FeaturedCourses;
