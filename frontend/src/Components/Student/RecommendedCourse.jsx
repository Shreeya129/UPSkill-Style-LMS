
import CourseCard from "./CourseCard";

const courses = [
  {
    _id: "1",
    title: "Ethereum & Solidity",
    author: "George Levy",
    price: 659,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1634704760994-96e3ccf2ae85?q=80&w=1170&auto=format&fit=crop",
  },
  {
    _id: "2",
    title: "Blockchain Fundamentals",
    author: "365 Careers",
    price: 759,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28",
  },
];

const RecommendedCourses = () => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          Recommended for you
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;
