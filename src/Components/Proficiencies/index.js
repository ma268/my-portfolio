import React from "react";

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

        {/* Core Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">
            Core Technologies
          </h3>

          <p className="max-w-[60ch]">
            C# • .NET / ASP.NET Core • SQL • React • JavaScript • GCP • AWS • Azure • REST APIs •
            Entity Framework • NHibernate • Flutter
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Systems & Architecture */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">
            Systems & Architecture
          </h3>

          <p className="max-w-[60ch]">
            API design • Scalable web architecture • Cloud infrastructure •
            Test strategy • Performance optimisation • Maintainable codebases •
            Full product lifecycle delivery
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Leadership */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">
            Leadership
          </h3>

          <p className="max-w-[60ch]">
            Technical planning • Code reviews • Mentorship • Delivery ownership •
            Cross-functional collaboration • Raising engineering standards
          </p>
        </div>

      </div>

    </section>
  );
};

export default Proficiencies;
