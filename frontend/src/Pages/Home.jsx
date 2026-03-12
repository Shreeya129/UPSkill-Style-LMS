import heroImg from "../Assets/Hero.png";
import Microsoft from "../Assets/microsoft.png";
import walmart from "../Assets/walmart.png";
import adobe from "../Assets/adobe.png";
import accenture from "../Assets/accenture.png";
import paypal from "../Assets/paypal.png";
import Testimonials from "../Components/Testimonials";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#1b1f27] to-[#111318] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Find out best <span className="text-yellow-400">Online</span>
              <br />
              <span className="text-yellow-400">Courses</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-md">
              We have a large library of courses taught by highly skilled and
              qualified faculties at a very affordable cost.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/courses"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition"
              >
                Explore courses
              </Link>

              <Link
                to="/contact"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-medium transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="LMS Hero"
              loading="lazy"
              className="max-w-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="bg-white pb-10">
        <div className="flex items-center justify-center pt-16">
          <p className="text-3xl text-gray-500">PARTNERSHIP BY COMPANIES</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
          <img src={Microsoft} alt="Microsoft" loading="lazy" className="w-20 md:w-28" />
          <img src={walmart} alt="Walmart" loading="lazy" className="w-20 md:w-28" />
          <img src={accenture} alt="Accenture" loading="lazy" className="w-20 md:w-28" />
          <img src={adobe} alt="Adobe" loading="lazy" className="w-20 md:w-28" />
          <img src={paypal} alt="Paypal" loading="lazy" className="w-20 md:w-28" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </>
  );
};

export default Home;
