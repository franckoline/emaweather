export default function Contact() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-sky-50 p-8 text-center">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions or feedback? Reach out to us below.
      </p>

      <form className="w-full max-w-md bg-white p-6 shadow-md rounded-2xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-sky-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-sky-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-sky-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
