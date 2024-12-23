import React from "react";
import s from "./Card.module.scss";
import Button from "../Button/Button";
const Card = ({image, title, text }) => {
  return (
    <>
      <div className={s.card}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>
         {text}
        </p>
        <Button>TRY IT NOW</Button>
      </div>
    </>
  );
};

export default Card;
