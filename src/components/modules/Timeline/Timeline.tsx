import React from "react";
import s from "./Timeline.module.css";
import cn from "classnames";

export default function Timeline(): JSX.Element {

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
