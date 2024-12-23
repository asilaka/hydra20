import React from 'react';
import s from './About.module.scss';
const About = () => {
  return (
    <>
      <section>
        <div className="container">
         <div className={s.wrap}>
          <img src="/public/Mask group (1).png" alt="" />

          <div className={s.eget}>
            <h1>ABOUT</h1>
            <p className={s.vr}>HYDRA VR</p>
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <button>LET’S GET IN TOUCH</button>
          </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default About;