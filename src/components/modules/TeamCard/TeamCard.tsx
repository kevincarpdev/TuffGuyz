import React from "react";
import s from "./TeamCard.module.css";
import cn from "classnames";
import Twitter from "../../../assets/img/twitter.png";

interface CardProps {
	className?: string;
	title?: string;
	subtitle?: string;
	text?: string;
	image?: any;
	twitter?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, text, image, twitter }) => {
	return (
		<>
			<div className={cn(s.root)}>
				<div className={s.cardText}>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
					<p>{text}</p>
					<a href={"https://twitter.com/" + twitter}>
						<img src={Twitter} alt={title + 's twitter'} className={s.twitterImage} />
					</a>
				</div>
				<img src={image} alt={title} className={s.cardImage} />
			</div>
		</>
	);
};

export default Card;
