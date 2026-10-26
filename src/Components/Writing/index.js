import React from "react";

const posts = [
  {
    title: "I Shipped Code I Didn't Fully Understand. Here's How I'm Thinking About That.",
    date: "June 2026",
    summary:
      "Shipping a solo-built app with AI tools, and the responsibility that comes with owning code you didn't write line by line.",
    link: "https://simplifyingcode.com/i-shipped-code-i-didn-t-fully-understand-here-s-how-i-m-thinking-about-that",
  },
  {
    title: "Data Models: The Blueprint for Your App's Brain",
    date: "July 2025",
    summary:
      "How relational, document and graph models organise and query data, and how to choose between them.",
    link: "https://simplifyingcode.com/data-models-the-blueprint-for-your-apps-brain",
  },
  {
    title: "Building Great Software: Reliable, Scalable and Maintainable",
    date: "March 2025",
    summary:
      "The three qualities that separate software that lasts from software that gets rewritten.",
    link: "https://simplifyingcode.com/building-great-software-the-three-musketeers-reliable-scalable-and-maintainable",
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
          Notes on engineering, product and using AI tooling in production.
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
          href="https://simplifyingcode.com"
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-4 hover:text-accent-dark transition"
        >
          All posts on SimplifyingCode.com →
        </a>
      </div>

    </section>
  );
};

export default Writing;
