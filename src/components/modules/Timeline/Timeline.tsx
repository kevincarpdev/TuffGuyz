import React from "react";
import PropTypes, { InferProps } from "prop-types";
import s from "./Timeline.module.css";
import cn from "classnames";

interface TimelineType {
	name: string;
	link: string;
	title: string;
}

export default function Timeline(): JSX.Element {
	// props: InferProps<typeof Hero.propTypes>,
	// const { menu: menuList, onLogout } = props;

	return (
		<>
			<section id="about" className={cn(s.root)}>
				<div className={s.hero}>
					<div className="container">
						<div className={s.heroWrap}></div>
					</div>
				</div>
			</section>
		</>
	);
}

Timeline.propTypes = {
	menu: PropTypes.shape({
		top: PropTypes.array.isRequired,
		bottom: PropTypes.array.isRequired,
	}).isRequired,
	onLogout: PropTypes.func.isRequired,
};
