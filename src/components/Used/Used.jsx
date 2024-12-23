import React from "react";
import s from "./Used.module.scss";
const Used = () => {
  return (
    <>
      <section className={s.used}>
        <div className="container">
          <div className={s.box}>
            <h3>
              <b>TECHNOLOGIES & HARDWARE</b> <br /> USED BY HYDRA VR.
            </h3>

            <button>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 25L30 37.5L42.5 25"
                  stroke="#433D60"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={s.wrap}>
            <img src="Hydra-Tech1 1.png" alt="" />
            <img src="Hydra-Tech2 1.png" alt="" />
            <img src="Hydra-Tech3 1.png" alt="" />
            <img src="Hydra-Tech4 1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Used;
