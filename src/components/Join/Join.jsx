import React from 'react'
import s from './Join.module.scss'
const Join = () => {
  return (
   <section>
    <div className="container">
<div className={s.hydra}>

    <h1>JOIN HYDRA</h1>
    <p>Let’s Build Your VR Experience</p>
    <div className={s.formContainer}>
      <form>
        <div className={s.inputGroup}>
          <input type="text" name="first_name" placeholder="First Name" required />
          <input type="text" name="last_name" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone_number" placeholder="Phone Number" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Tell Us Something..." rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
</div>
    </div>
   </section>
  )
}

export default Join
