import React from "react";
import { Cta } from "../Common";
import PTPH from "../../assets/img/ptph.png";
import Synod from "../../assets/img/copticSynodDecrees.png";
import TheWrinkleClinics from "../../assets/img/theWrinkleClinics.png";

function RecentWork() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-6 py-48">

      {/* Section Intro */}
      <div className="mb-36">
        <h2 className="text-5xl font-semibold tracking-tight mb-8">
          Selected Work
        </h2>
        <p className="text-[18px] leading-[1.7] text-gray-600 max-w-[65ch]">
          A selection of products and platforms built across mobile and web,
          focused on clarity, reliability and long-term maintainability.
        </p>
      </div>

      <div className="space-y-40">

        {/* Project 1 */}
        <div>
          <img
            src={PTPH}
            alt="Crown Court PTPH Stage Dates App"
            className="w-full rounded-xl mb-14"
          />

          <h3 className="text-3xl font-semibold tracking-tight mb-6">
            Crown Court PTPH Stage Dates
          </h3>

          <p className="text-[18px] leading-[1.7] text-gray-600 max-w-[65ch] mb-10">
            Cross-platform mobile application built for legal professionals
            to automate bail and custody stage date calculations. Designed
            with an offline-first approach to ensure reliability in court
            environments and reduce manual error.
          </p>

          <div className="flex gap-10 text-sm tracking-wide">
            <Cta
              actionName="App Store →"
              link="https://apps.apple.com/gb/app/crown-court-ptph-stage-dates/id1534947020"
              target="_blank"
              isMinimal
            />
            <Cta
              actionName="Play Store →"
              link="https://play.google.com/store/apps/details?id=com.MichaelAsaad.PTPHStagingDates"
              target="_blank"
              isMinimal
            />
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Project 2 */}
        <div>
          <img
            src={Synod}
            alt="Coptic Synod Decrees Platform"
            className="w-full rounded-xl mb-14"
          />

          <h3 className="text-3xl font-semibold tracking-tight mb-6">
            Coptic Synod Decrees Platform
          </h3>

          <p className="text-[18px] leading-[1.7] text-gray-600 max-w-[65ch] mb-10">
            Official English-language publishing platform for the Decrees of
            the Holy Synod. Built with structured search, responsive design
            and long-term maintainability in mind.
          </p>

          <Cta
            actionName="View Live →"
            link="http://www.copticsynoddecrees.com/"
            target="_blank"
            isMinimal
          />
        </div>

        <hr className="border-gray-200" />

        {/* Project 3 */}
        <div>
          <img
            src={TheWrinkleClinics}
            alt="The Wrinkle Clinics Website"
            className="w-full rounded-xl mb-14"
          />

          <h3 className="text-3xl font-semibold tracking-tight mb-6">
            The Wrinkle Clinics
          </h3>

          <p className="text-[18px] leading-[1.7] text-gray-600 max-w-[65ch] mb-10">
            Custom website for a network of private aesthetic clinics,
            designed for performance, responsiveness and patient trust.
          </p>

          <Cta
            actionName="View Live →"
            link="https://www.michaelasaad.com/thewrinkleclinics/"
            target="_blank"
            isMinimal
          />
        </div>

      </div>

    </section>
  );
}

export default RecentWork;
