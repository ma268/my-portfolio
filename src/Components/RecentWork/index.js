import React from "react";
import { Cta } from "../Common";
import PTPH from "../../assets/img/ptph.png";
import Synod from "../../assets/img/copticSynodDecrees.png";
import TheWrinkleClinics from "../../assets/img/theWrinkleClinics.png";

function RecentWork() {
  return (
    <section id="work" className="max-w-2xl mx-auto px-6 py-28 md:py-56
">

      {/* Section Intro */}
      <div className="mb-44">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Selected Work
        </h2>
        <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch]">
          A selection of products and platforms built across mobile and web,
          focused on clarity, reliability and long-term maintainability.
        </p>
      </div>

      <div className="space-y-52">

        {/* Project 1 */}
        <div>
          <img
            src={PTPH}
            alt="Crown Court PTPH Stage Dates App"
            className="w-full max-h-[420px] object-cover rounded-lg mb-16"
          />

          <h3 className="text-2xl font-semibold tracking-tight mb-5">
            Crown Court PTPH Stage Dates
          </h3>

          <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch] mb-8">
            Cross-platform mobile application built for legal professionals
            to automate bail and custody stage date calculations. Designed
            with an offline-first approach to ensure reliability in court
            environments.
          </p>

          <div className="flex gap-8 text-sm">
            <Cta
              actionName="App Store →"
              link="https://apps.apple.com/gb/app/crown-court-ptph-stage-dates/id1534947020"
              target="_blank"
              variant="minimal"
            />
            <Cta
              actionName="Play Store →"
              link="https://play.google.com/store/apps/details?id=com.MichaelAsaad.PTPHStagingDates"
              target="_blank"
              variant="minimal"
            />
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Project 2 */}
        <div>
          <img
            src={Synod}
            alt="Coptic Synod Decrees Platform"
            className="w-full max-h-[420px] object-cover rounded-lg mb-16"
          />

          <h3 className="text-2xl font-semibold tracking-tight mb-5">
            Coptic Synod Decrees Platform
          </h3>

          <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch] mb-8">
            Official English-language publishing platform for the Decrees of
            the Holy Synod. Built with structured search, responsive design
            and long-term maintainability in mind.
          </p>

          <Cta
            actionName="View Live →"
            link="http://www.copticsynoddecrees.com/"
            target="_blank"
            variant="minimal"
          />
        </div>

        <hr className="border-gray-200" />

        {/* Project 3 */}
        <div>
          <img
            src={TheWrinkleClinics}
            alt="The Wrinkle Clinics Website"
            className="w-full max-h-[420px] object-cover rounded-lg mb-16"
          />

          <h3 className="text-2xl font-semibold tracking-tight mb-5">
            The Wrinkle Clinics
          </h3>

          <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch] mb-8">
            Custom website for a network of private aesthetic clinics,
            designed for performance, responsiveness and patient trust.
          </p>

          <Cta
            actionName="View Live →"
            link="https://www.michaelasaad.com/thewrinkleclinics/"
            target="_blank"
            variant="minimal"
          />
        </div>

      </div>

    </section>
  );
}

export default RecentWork;
