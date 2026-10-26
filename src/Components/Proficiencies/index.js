import React from "react";

const strengths = [
  {
    title: "Data and AI systems at scale",
    body: "I lead the team at TAINA Technology building high-throughput data pipelines and AI-powered features for major financial institutions, where correctness matters as much as speed.",
  },
  {
    title: "Products, from idea to App Store",
    body: "I designed, built and shipped DinnerSorted on my own in React Native and TypeScript. Before that, an offline-first mobile app for legal professionals that had to keep working in court.",
  },
  {
    title: "Leading engineers",
    body: "Technical planning, code reviews, mentoring and delivery ownership, with cross-functional teams and a steady push to raise engineering standards.",
  },
  {
    title: "Systems built to last",
    body: "API design, test strategy and cloud infrastructure across Azure, AWS and GCP, aimed at codebases that stay maintainable for years instead of getting rewritten.",
  },
];

const Proficiencies = () => {
  return (
    <section id="proficiencies" className="max-w-2xl mx-auto px-6 py-28 md:py-56
">

      {/* Section Header */}
      <div className="mb-32">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Proficiencies
        </h2>
      </div>

      <div className="space-y-20 text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600">

        {strengths.map((item, index) => (
          <React.Fragment key={item.title}>
            {index > 0 && <hr className="border-gray-200" />}
            <div>
              <h3 className="text-xl font-semibold text-black mb-6">
                {item.title}
              </h3>
              <p className="max-w-[60ch]">{item.body}</p>
            </div>
          </React.Fragment>
        ))}

        <hr className="border-gray-200" />

        {/* Stack */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">
            Day-to-day stack
          </h3>

          <p className="max-w-[60ch] text-gray-500 text-[15px] leading-[1.8]">
            C# • .NET / ASP.NET Core • SQL • React • React Native • TypeScript •
            JavaScript • Azure • AWS • GCP • REST APIs • Entity Framework •
            NHibernate • Flutter
          </p>
        </div>

      </div>

    </section>
  );
};

export default Proficiencies;
