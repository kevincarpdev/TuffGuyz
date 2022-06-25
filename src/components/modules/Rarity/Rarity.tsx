import React from "react";
import PropTypes, { InferProps } from "prop-types";
import s from "./Rarity.module.css";
import cn from "classnames";
import RarityImage from "../../../assets/img/rarity.png";

interface HeroType {
	name: string;
	link: string;
	title: string;
}

export default function Rarity(): JSX.Element {
	// props: InferProps<typeof Hero.propTypes>,
	// const { menu: menuList, onLogout } = props;
	return (
		<>
			<section id="rarity" className={cn(s.root, 'rarity')}>
				<div className={s.rarity}>
					<div className="container">
						<div className="flexRow rarity">
							<div className={s.rarityText}>
								<h2>Rarity</h2>
								<div className={s.statTable}>
									<div className={s.tableRow}>
										<div className={s.statHeader}>10,000</div>
										<div className={s.statHeader}>Total Tuff Guys</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>9</div>
										<div className={s.statHeader}>Skins</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>55</div>
										<div className={s.statHeader}>Clothes</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>55</div>
										<div className={s.statHeader}>Headwears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>40</div>
										<div className={s.statHeader}>Mouthwears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>10</div>
										<div className={s.statHeader}>Tears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>30</div>
										<div className={s.statHeader}>Backgrounds</div>
									</div>
								</div>
							</div>
							<img src={RarityImage} alt="Rarity" className={s.image} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

Rarity.propTypes = {
	menu: PropTypes.shape({
		top: PropTypes.array.isRequired,
		bottom: PropTypes.array.isRequired,
	}).isRequired,
	onLogout: PropTypes.func.isRequired,
};
