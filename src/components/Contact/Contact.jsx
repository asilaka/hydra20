import React from 'react';
import s from './Contact.module.scss';
const Contact = () => {
  return (
    <>
         <div className="container"> 
      <div className={s.send}>
        <div className={s.card}>
          <img src="/public/Location-Icon.png" alt="" />
          <div>
            <h2>Pay Us a Visit</h2>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
        <div className={s.card}>
          <img src="/public/phone-call.png" alt="" />
          <div>
          <h2>Give Us a Call</h2>
          <p>(110) 1111-1010</p>
          </div>
        </div>
        <div className={s.card}>
          <img src="/public/email.png" alt="" />
          <div>
          <h2>Send Us a Message</h2>
          <p>Contact@HydraVTech.com</p>   
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
