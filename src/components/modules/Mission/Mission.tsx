import React from "react";
import PropTypes, { InferProps } from "prop-types";
import HeroBanner from "../../../assets/img/banner.png";
import s from "./Mission.module.css";
import cn from "classnames";
import HeroLeft from "../../../assets/img/hero-left.png";
import HeroRight from "../../../assets/img/hero-right.png";

interface HeroType {
  name: string;
  link: string;
  title: string;
}

export default function Mission(
  // props: InferProps<typeof Hero.propTypes>,
): JSX.Element {
  // const { menu: menuList, onLogout } = props;
  return (
    <>
      <div id="mission" className={cn(s.root)}>
        <div className={s.hero}>
          <div className="container">
            <div className={s.heroWrap}>
              <div className={s.imageContainer}>
                <img src={HeroLeft} alt="Tuff Guys Left" className={s.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Mission.propTypes = {
  menu: PropTypes.shape({
    top: PropTypes.array.isRequired,
    bottom: PropTypes.array.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};
