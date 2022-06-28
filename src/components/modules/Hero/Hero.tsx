import React from "react";
import HeroBanner from "../../../assets/img/banner.png";
import s from "./Hero.module.css";
import cn from "classnames";
import Marquee from "react-fast-marquee";
import HeroLeft from "../../../assets/img/hero-left.png";
import HeroRight from "../../../assets/img/hero-right.png";

import MobileMarqueeImage1 from "../../../assets/img/heromobile1.png";
import MobileMarqueeImage2 from "../../../assets/img/heromobile2.png";
import MobileMarqueeImage3 from "../../../assets/img/heromobile3.png";
import MobileMarqueeImage4 from "../../../assets/img/heromobile4.png";
import MobileMarqueeImage5 from "../../../assets/img/heromobile5.png";
import MobileMarqueeImage6 from "../../../assets/img/heromobile6.png";
import MobileMarqueeImage7 from "../../../assets/img/heromobile7.png";
import MobileMarqueeImage8 from "../../../assets/img/heromobile8.png";
import MobileMarqueeImage9 from "../../../assets/img/heromobile9.png";
import MobileMarqueeImage10 from "../../../assets/img/heromobile10.png";

export default function Hero(): JSX.Element {
	return (
		<>
			<section id="about" className={cn(s.root)}>
				<div className={s.hero}>
					<div className="container hero">
						<div className={s.heroWrap}>
							<div className={s.heroMobileMarquee}>
								<Marquee pauseOnHover={true} speed={10} gradient={false}>
									<img
										src={MobileMarqueeImage1}
										alt="Tuff Guys 1"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage2}
										alt="Tuff Guys 2"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage3}
										alt="Tuff Guys 3"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage4}
										alt="Tuff Guys 4"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage5}
										alt="Tuff Guys 5"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage1}
										alt="Tuff Guys 1"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage2}
										alt="Tuff Guys 2"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage3}
										alt="Tuff Guys 3"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage4}
										alt="Tuff Guys 4"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage5}
										alt="Tuff Guys 5"
										className={s.mobileMarqueeImage}
									/>
								</Marquee>
							</div>
							<div className={s.imageContainer}>
								<img src={HeroLeft} alt="Tuff Guys Left" className={s.image} />
							</div>
							<div className={s.heroText}>
								<div className={s.badge}>Sold out!</div>
								<a className={s.heroBannerMain} href="/">
									<img src={HeroBanner} alt="Hero" className={s.heroMain} />
								</a>
								<div className={s.heroExtraText}>
									<h4>10,000 tough guys</h4>
									<h4>enter the meta verse</h4>
								</div>
							</div>
							<div className={s.imageContainer}>
								<img src={HeroRight} alt="Tuff Guys Right" className={s.image} />
							</div>
							<div className={s.heroMobileMarquee}>
								<Marquee pauseOnHover={true} speed={10} gradient={false}>
									<img
										src={MobileMarqueeImage6}
										alt="Tuff Guys 6"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage7}
										alt="Tuff Guys 7"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage8}
										alt="Tuff Guys 8"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage9}
										alt="Tuff Guys 9"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage10}
										alt="Tuff Guys 10"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage6}
										alt="Tuff Guys 6"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage7}
										alt="Tuff Guys 7"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage8}
										alt="Tuff Guys 8"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage9}
										alt="Tuff Guys 9"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage10}
										alt="Tuff Guys 10"
										className={s.mobileMarqueeImage}
									/>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
