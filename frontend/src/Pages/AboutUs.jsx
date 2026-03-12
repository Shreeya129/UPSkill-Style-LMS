const About = () => {
  return (
    <section className="min-h-[80vh] bg-[#0b0f1a] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-yellow-400">UPSkill</span>
        </h1>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          UPSkill is an online learning platform designed to help students and professionals
          build in-demand skills with high-quality, affordable courses.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="bg-[#121826] p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Our Mission
            </h3>
            <p className="text-gray-400">
              To empower learners with practical knowledge and real-world skills
              that help them grow in their careers.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#121826] p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Our Vision
            </h3>
            <p className="text-gray-400">
              To become a globally trusted platform for online education
              and skill development.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#121826] p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Why Choose Us?
            </h3>
            <p className="text-gray-400">
              Expert instructors, industry-relevant courses, flexible learning,
              and affordable pricing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
