import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { RouteComponentProps } from "@reach/router";
import Hero from "../../components/modules/Hero";
import Mission from "../../components/modules/Mission";
import Timeline from "../../components/modules/Timeline";
import Card from "../../components/modules/Card";
import FusionImage from "../../assets/img/fusion.gif";
import StakingImage from "../../assets/img/staking.png";

export default function Dashboard(
	props: InferProps<typeof Dashboard.propTypes> & RouteComponentProps,
): JSX.Element {
	return (
		<>
			<Hero />
			{/* <Mission /> */}
			<Timeline />
			<section id="utility" className="off-white">
				<h2>Utility</h2>
				<div className="cardListing">
					<div className="flexColumn container">
						<Card
							title={"Fusion"}
							subtitle={"December 2021"}
							image={FusionImage}
							text={
								"Tuff holders of two Tuff Guys will have the ability to merge/fuse them together to randomly combine their assets and traits! While this process is randomized, you are guaranteed to only acquire traits that exist on the two Tuff Guys you possess! Tuff holders of three or more Tuff Guys will have the ability to hand select and choose what assets get transferred to the Fusion when merging three or more Tuff Guys! When you fuse your Tuff Guys, you burn them in the process to create the Fusion!"
							}
						/>
						<Card
							title={"Staking"}
							subtitle={"December 2021"}
							image={StakingImage}
							text={
								"$TUFF Tokens are a benefit of holding/staking your Tuff Guys to earn rewards and incentivize our holders in the Tuff Community. For every Tuff Guy you hold/stake, you will earn $TUFF Tokens for each of the Tuff Guys you hold. These Tokens will given on a biweekly basis (assuming you have held for the 14 day requirement) and will continue to accrue with no caps."
							}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

Dashboard.propTypes = {
	user: PropTypes.any.isRequired,
};
