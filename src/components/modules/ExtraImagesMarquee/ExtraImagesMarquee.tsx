import React from "react";
import s from "./ExtraImagesMarquee.module.css";
import cn from "classnames";
import Marquee from "react-fast-marquee";
import TuffFooter1 from "../../../assets/img/tuffFooter1.png";
import TuffFooter2 from "../../../assets/img/tuffFooter2.png";
import TuffFooter3 from "../../../assets/img/tuffFooter3.png";

interface CardProps {
  className?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  image?: any;
  twitter?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  text,
  image,
}) => {
  return (
      <div className={cn(s.root)}>
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className={s.marquee}
      >
        <img src={TuffFooter1} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter2} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter3} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter1} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter2} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter3} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter2} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter1} alt={'Tuff Guys'} className={s.marqueeImage} />
        <img src={TuffFooter3} alt={'Tuff Guys'} className={s.marqueeImage} />
      </Marquee>
      </div>
  );
};

export default Card;
