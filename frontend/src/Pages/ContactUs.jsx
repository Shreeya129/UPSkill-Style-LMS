const Contact = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0b0f1a] px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border-2 border-yellow-400 p-8">

        <h2 className="text-3xl font-bold mb-2 text-black">
          Contact Us
        </h2>

        <p className="text-gray-500 mb-6">
          For any queries, please reach out to us. Our support team will get back to you within 24 hours.
        </p>

        <hr className="mb-6" />

        {/* FORM */}
        <form>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1f2b] text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1f2b] text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Query"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1f2b] text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
