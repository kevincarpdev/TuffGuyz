import React from "react";
import PropTypes, { InferProps } from "prop-types";
import HeroBanner from "../../../assets/img/banner.png";
import s from "./Hero.module.css";
import cn from "classnames";
import HeroLeft from "../../../assets/img/hero-left.png";
import HeroRight from "../../../assets/img/hero-right.png";

interface HeroType {
	name: string;
	link: string;
	title: string;
}

export default function Hero(): JSX.Element {
// props: InferProps<typeof Hero.propTypes>,
	// const { menu: menuList, onLogout } = props;
	return (
		<>
			<div id="about" className={cn(s.root)}>
				<div className={s.hero}>
					<div className="container">
						<div className={s.heroWrap}>
							<div className={s.imageContainer}>
								<img src={HeroLeft} alt="Tuff Guys Left" className={s.image} />
							</div>
							<div className={s.heroText}>
								<div className={s.badge}>Sold out!</div>
								<img src={HeroBanner} alt="Hero" className={s.heroMain} />
								<div className={s.heroExtraText}>
									<h4>10,000 tough guys</h4>
									<h4>enter the meta verse</h4>
								</div>
							</div>
							<div className={s.imageContainer}>
								<img src={HeroRight} alt="Tuff Guys Right" className={s.image} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Hero.propTypes = {
	menu: PropTypes.shape({
		top: PropTypes.array.isRequired,
		bottom: PropTypes.array.isRequired,
	}).isRequired,
	onLogout: PropTypes.func.isRequired,
};
