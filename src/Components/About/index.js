import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 py-28 md:py-56
">

      {/* Section Header */}
      <div className="mb-32">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          About
        </h2>
      </div>

      {/* Copy */}
      <div className="max-w-[60ch] mx-auto space-y-8 text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600">

        <p>
          I’m a Software Engineering Team Lead with over 10 years of experience
          building and delivering production systems. My background is rooted in
          C# / .NET, with experience spanning frontend development, APIs and
          cloud infrastructure.
        </p>

        <p>
          I focus on building reliable, maintainable systems that support real
          users and real business needs. Over the years I’ve worked across the
          full product lifecycle — from discovery and system design through to
          delivery and long-term evolution.
        </p>

        <p>
          Alongside my role, I’m building a SaaS product focused on simplifying
          weekly meal planning for busy parents — applying the same product
          thinking and execution outside of my day-to-day work.
        </p>

      </div>

    </section>
  );
};

export default About;
