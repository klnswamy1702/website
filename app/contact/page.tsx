export default function Contact() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="p-2 w-full bg-gray-800" />
          <input type="email" placeholder="Your Email" className="p-2 w-full bg-gray-800" />
          <textarea placeholder="Your Message" className="p-2 w-full bg-gray-800"></textarea>
          <button type="submit" className="bg-purple-500 px-6 py-2 rounded-lg">Send</button>
        </form>
      </section>
    );
  }
  