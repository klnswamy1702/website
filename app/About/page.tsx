export default function About() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          I'm a passionate developer specializing in modern web technologies like React, Next.js, and Tailwind CSS.
        </p>
        <a href="/resume.pdf" download className="mt-6 bg-purple-500 px-6 py-2 rounded-lg">Download Resume</a>
      </section>
    );
  }
  