import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Proficiencies = () => {
  return (
    <section id="proficiencies" className="container mx-auto my-28  md:my-60">
      <div className="text-center mb-14">
        <h5>some of my</h5>
        <h2 className="font-extrabold text-5xl mb-7">Proficiencies</h2>
      </div>
      <div className="grid gap-4 m-3 md:grid-cols-2 max-w-4xl md:mx-auto">
        <div
          id="frontend-experience"
          className="p-5 bg-green-200 rounded-xl ring-4 ring-green-100 hover:bg-green-100 transition"
        >
          <h3 className="text-center font-bold mb-8">Frontend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">HTML</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">CSS3</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">JavaScript</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">React</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">Redux</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">Flutter</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">Bootstrap</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">Tailwind</h5>
            </article>
          </div>
        </div>
        <div
          id="backend-experience"
          className="p-5 bg-green-200 rounded-xl ring-4 ring-green-100 hover:bg-green-100 transition"
        >
          <h3 className="text-center font-bold mb-8">Backend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">C#</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">.NetCore</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">PHP</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">MongoDb</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">SQL</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">PostgreSQL</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">NHibernate</h5>
            </article>
            <article>
              <RiCheckboxCircleFill className="inline mx-2" />
              <h5 className="inline">EntityFramework</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;
