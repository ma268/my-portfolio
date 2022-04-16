import React from "react";
import Headshot from "../../assets/img/greyJumperHeadshot.png";

const About = () => {
  return (
    <section id="about" className="container mx-auto my-28  md:my-40">
      <div className="text-center mb-5">
        <h5>a little bit</h5>
        <h2 className="font-extrabold text-5xl mb-7">About Me</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="my-20">
          <div className="mx-auto w-96">
            <div className="mx-auto rounded-xl grid place-items-center bg-gradient-to-r from-green-100 to-green-200 aspect-square ">
              <img
                src={Headshot}
                alt="About Me"
                className="rounded-xl overflow-hidden md:rotate-3 hover:rotate-0 transition"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-14">
          <p>
            Motivated, self-driven and detail orientated FullStack engineer of
            7+ years. With a hands on approach to problem solving experienced in
            large scale C#/ASP.NET MVC development at all stages of the product
            life cycle; from inception and design to developing and maintaining
            web applications.
          </p>
          <p>
            I enjoy working independently but also thrive when working in a
            team, utilising my technical experience and interacting with
            customers to meet expectations. I am always looking for new
            opportunities to apply my experience, learn new technologies and
            advance as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
