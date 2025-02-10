export default function Resume() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Resume</h2>
        <iframe src="/resume.pdf" className="w-full h-96 mt-6"></iframe>
        <a href="/resume.pdf" download className="mt-4 bg-purple-500 px-6 py-2 rounded-lg">Download Resume</a>
      </section>
    );
  }
  