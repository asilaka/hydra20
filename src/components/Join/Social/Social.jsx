import React from 'react';
import s from './Social.module.scss';
const Social = () => {
  return (
    <>
      <div className={s.hydra}>
        <img src="/Frame.svg" alt="" />

        <div className={s.about}>
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">TECHNOLOGIES</a>
          <a href="">HOW TO</a>
          <a href="">JOIN HYDRA</a>
        </div>
        <div className={s.cond}>
          <a href="">F.A.Q</a>
          <a href="">SITEMAP</a>
          <a href="">CONDITIONS</a>
          <a href="">LICENSES</a>
        </div>

        <div className={s.in}>
<a href="">SOCIALIZE WITH HYDRA</a>
<div className={s.inst}>
    <img src="/facebook.png" alt="" />
    <img src="/twitter.png" alt="" />
    <img src="/linkedin.png" alt="" />
    <img src="/youtube.png" alt="" />
    <img src="/instagram.png" alt="" />
    <img src="/pinterest.png" alt="" />
</div>
<button>BUILD YOUR WORLD</button>
        </div>
      </div>
    </>
  );
};

export default Social;
