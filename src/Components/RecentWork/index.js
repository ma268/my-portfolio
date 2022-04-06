import React from "react";
import { Cta } from "../Common";
import PTPH from "../../assets/img/ptph.png";
import Synod from "../../assets/img/copticSynodDecrees.png";
import RamyBassilyEyes from "../../assets/img/ramyBassilyEyes.png";

function RecentWork() {
  return (
    <section id="work" className="container mx-auto my-28  md:my-60">
      <div className="text-center mb-5">
        <h5>some of my</h5>
        <h2 className="font-extrabold text-5xl mb-7">Recent Work</h2>
      </div>
      <div className="max-w-2xl md:mx-auto">
        <div className="flex my-16 gap-10">
          <div className="w-2/5">
            <img src={PTPH} alt="PTPH Crown Court App" />
          </div>
          <div className="w-3/5">
            <h3 className="font-bold text-xl">Crown Court PTPH Stage Dates</h3>
            <small>Flutter, Dart, Android, iOS</small>
            <p className="my-5">
              The PTPH Stage Date app is designed to simplify the work of
              calculating bail or custody stage dates. The app works offline and
              will do all the calculations for you.
            </p>
            <div className="mx-auto flex gap-x-3">
              <Cta actionName="View in Apple Store" link="#" />
              <Cta actionName="View in Play Store" link="#" isSecondary />
            </div>
          </div>
        </div>
        <div className="flex my-16 gap-10">
          <div className="w-2/5">
            <img src={Synod} alt="Coptic Synod Decrees" />
          </div>
          <div className="w-3/5">
            <h3 className="font-bold text-xl">Coptic Synod Decrees</h3>
            <small>PHP, Bootsrap, AJAX, Search, Responsive Design</small>
            <p className="my-5">
              CopticSynodDecrees.com: the official English language publisher of
              the Decrees of the Holy Synod of the Coptic Orthodox Church.
            </p>
            <div className="mx-auto flex gap-x-3">
              <Cta actionName="Live Demo" link="#" />
              <Cta actionName="GitHub" link="#" isSecondary />
            </div>
          </div>
        </div>
        <div className="flex my-16 gap-10">
          <div className="w-2/5">
            <img src={RamyBassilyEyes} alt="Ramy Bassily Eyes" />
          </div>
          <div className="w-3/5">
            <h3 className="font-bold text-xl">Ramy Bassily Eyes</h3>
            <small>PHP, Bootsrap, Custom Template, Responsive Design</small>
            <p className="my-5">
              Mr Ramy Bassily is the consultant lead in cornea and anterior
              segment surgery at Ipswich hospital. He prides himself in the work
              that he does for his patients.
            </p>
            <div className="mx-auto flex gap-x-3">
              <Cta actionName="Live Demo" link="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
