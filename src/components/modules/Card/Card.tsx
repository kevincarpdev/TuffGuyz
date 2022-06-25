import React from "react";
import s from "./Card.module.css";
import cn from "classnames";

interface CardProps {
  className?: string
  title?: string
  subtitle?: string
  text?: string
  image?: any
}

const Card: React.FC<CardProps> = ({
  title, subtitle, text, image,
}) => {
  
  return (
    <>
      <div className={cn(s.root)}>
        <div className={s.cardText}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{text}</p>
        </div>
        <img src={image} alt={title} className={s.cardImage} />
      </div>
    </>
  )
}

export default Card
