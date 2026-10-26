import React from "react";

const SUBSTACK_URL = "https://michaelasaad.substack.com";

const posts = [
  {
    title: "I can't quit my job to build. So I build after bedtime.",
    date: "October 2026",
    summary:
      "My first real post: who I am, what I'm building, and why I'm doing it in public this time.",
    link: "https://michaelasaad.substack.com/p/i-cant-quit-my-job-to-build-so-i",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="max-w-2xl mx-auto px-6 py-28 md:py-56
">

      {/* Section Header */}
      <div className="mb-32">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Writing
        </h2>
        <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch]">
          Building profitable software products after work: launching apps,
          growing an audience and balancing it with family life.
        </p>
      </div>

      <div className="max-w-[60ch] space-y-16">
        {posts.map((post) => (
          <article key={post.link}>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition"
              >
                {post.title}
              </a>
            </h3>
            <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600">
              {post.summary}
            </p>
          </article>
        ))}
      </div>

      <div className="max-w-[60ch] mt-20">
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-4 hover:text-accent-dark transition"
        >
          Read and subscribe on Substack →
        </a>
      </div>

    </section>
  );
};

export default Writing;
