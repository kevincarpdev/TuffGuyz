import React from "react";
import s from "./Footer.module.css";
import cn from "classnames";
import FooterLogo from "../../../assets/img/footer-logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";

interface CardProps {
	className?: string;
	title?: string;
	subtitle?: string;
	text?: string;
	image?: any;
	twitter?: string;
}

const Card: React.FC<CardProps> = () => {
	return (
		<>
			<div className={cn(s.root, "container")}>
				<div className={s.copyright}>
					<a href="/">
						<img src={FooterLogo} alt={"Tuff Guys"} className={s.footerLogoImage} />
					</a>
					<p>Copyright © 2021 Tuff Guys</p>
				</div>
				<div className={s.footerLinks}>
					<div className={s.footerNavColumn}>
						<h4>About</h4>
						<ul>
							<li>
								<a href="">How to Buy</a>
							</li>
							<li>
								<a href="">Rarity</a>
							</li>
							<li>
								<a href="">OpenSea</a>
							</li>
						</ul>
					</div>
					<div className={s.footerNavColumn}>
						<h4>Company</h4>
						<ul>
							<li>
								<a href="#about">About Us</a>
							</li>
							<li>
								<a href="#team">Team</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className={s.footerNavColumn}>
						<h4>Information</h4>
						<ul>
							<li>
								<a href="">Terms of Service</a>
							</li>
							<li>
								<a href="">Privacy Policy</a>
							</li>
							<li>
								<a href="#roadmap">Roadmap</a>
							</li>
						</ul>
					</div>
					<div className={cn(s.footerNavColumn + " social")}>
						<h4>Connect</h4>
						<ul className={s.socialNav}>
							<li>
								<a href="https://twitter.com/tuffguysNFT" target="_blank">
									<FaTwitter />{" "}
								</a>
							</li>
							<li>
								<a href="https://discord.com/invite/zy5pDewEN8" target="_blank">
									<FaDiscord />{" "}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
