const testimonials = [
  {
    name: "Alice Johnson",
    role: "Backend Developer",
    text: "Learning Node.js and Express was a breeze thanks to Brook's practical explanations.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    role: "Full Stack Developer",
    text: "Brook's mentorship helped me level up my coding skills. The project-based learning approach is fantastic!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Eve Adams",
    role: "DevOps Engineer",
    text: "The Next.js tips were incredibly useful. I implemented them in my real-world project.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
   {
    name: "Johnathon Bendickt",
    role: "AWS Developer",
    text: "Learning Node.js and Express was a breeze thanks to Brook's practical explanations.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Petrick Swift",
    role: "Full Stack Developer",
    text: "Brook's mentorship helped me level up my coding skills. The project-based learning approach is fantastic!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",                                                          
  },
  {
    name: "Belly Bing",
    role: "Software Engineer",
    text: "The Next.js tips were incredibly useful. I implemented them in my real-world project.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Thousands of Learners
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-6">{item.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
