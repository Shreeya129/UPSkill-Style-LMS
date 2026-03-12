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
  {
    _id: "3",
    title: "ReactJS Complete Guide",
    author: "Maximilian",
    price: 599,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
  },
];

const StudentCoursesSection = () => {
  return (
    <section className="mt-10">
      <h3 className="text-lg font-semibold text-white mb-4">
        Explore Courses
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default StudentCoursesSection;
