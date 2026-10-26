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
          I trained and worked as a pharmacist before moving into software
          engineering — a switch that left me with a habit of double-checking
          my own work that's followed me into every system I've built since.
          Over 10 years later, I'm a Software Engineering Team Lead at
          TAINA Technology, where I build high-throughput data pipelines and
          AI-powered features for major financial institutions.
        </p>

        <p>
          I focus on building reliable, maintainable systems that support real
          users and real business needs. Over the years I've worked across the
          full product lifecycle — from discovery and system design through to
          delivery and long-term evolution — with a background rooted in
          C# / .NET and spanning frontend development, APIs and cloud
          infrastructure.
        </p>

        <p>
          I also write about building software products after work, in public,
          on{" "}
          <a
            href="https://michaelasaad.substack.com"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4 hover:text-accent-dark transition"
          >
            my Substack
          </a>.
        </p>

      </div>

      {/* Building */}
      <div id="building" className="max-w-[60ch] mx-auto mt-32 pt-32 border-t border-gray-200">
        <h3 className="text-2xl font-semibold tracking-tight mb-10">
          What I'm building
        </h3>

        <div className="space-y-10 text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600">
          <div>
            <h4 className="text-black font-semibold mb-2">DinnerSorted</h4>
            <p>
              Live on the App Store and still in active development.{" "}
              <a
                href="#work"
                className="text-accent underline underline-offset-4 hover:text-accent-dark transition"
              >
                See it in Selected Work
              </a>.
            </p>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-2">
              <a
                href="https://viableideas.com"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-dark transition"
              >
                ViableIdeas.com →
              </a>
            </h4>
            <p>
              An idea validation tool that lets you build weighted scorecards,
              share them with stakeholders, and make data-driven decisions
              about a product before you build it.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
