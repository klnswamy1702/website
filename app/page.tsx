// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <h1>Swamy</h1> 
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-purple-500">
        Hi, I'm <span className="text-white">Your Name</span>
      </h1>
      <p className="mt-4 text-lg">Full-Stack Developer | React | Next.js</p>
      <Link href="/projects">
        <button className="mt-6 bg-purple-500 px-6 py-2 rounded-lg">View My Work</button>
      </Link>
    </section>
  );
}

