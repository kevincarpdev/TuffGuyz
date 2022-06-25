import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { RouteComponentProps } from "@reach/router";
import Hero from "../../components/modules/Hero";
import Timeline from "../../components/modules/Timeline";
import Card from "../../components/modules/Card";
import TeamCard from "../../components/modules/TeamCard";
import FusionImage from "../../assets/img/fusion.gif";
import StakingImage from "../../assets/img/staking.png";
import Rarity from "../../components/modules/Rarity";
import ToxtreplaImage from "../../assets/img/toxtrepla.png";
import ZavImage from "../../assets/img/zav.png";
import NickImage from "../../assets/img/nick.png";
import JelloImage from "../../assets/img/jello.png";

// import Mission from "../../components/modules/Mission";

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
			<Rarity />
			<section id="team" className="off-white">
				<h2>Meet The Team</h2>
				<div className="cardListing">
					<div className="flexColumn container">
						<TeamCard
							title={"Toxtrepla"}
							subtitle={"Founder"}
							image={ToxtreplaImage}
							text={
								"Hey there, I'm tox. I am a 33-year-old father of 3 toddlers, based from the tristate area of the US. I am the owner of Malice, as well as a heavily entrenched Video Game grader, collector, investor, as well as a Retail Market Analyst. Community and Family is everything in this life and in this space especially, and I am beyond thrilled to be a part of an incredibly strong and meaningful project here. Never hesitate to reach out to me directly with questions or comments!"
							}
							twitter="toxtrepla"
						/>
						<TeamCard
							title={"Zav"}
							subtitle={"Founder / Artist"}
							image={ZavImage}
							text={
								"Hi there I am ZavStudios but feel free to call me Zav. I am 22-year-old college dropout from The Netherlands who has worked for numerous multi-million companies providing a plethora of illustrations!. As of a young age I have always been drawing around creating imaginary figures and monsters. Creativity really has no boundaries! Don't be afraid to shoot any questions my way I am always available for a chat!"
							}
							twitter="ZavStudios"
						/>
						<TeamCard
							title={"Nick"}
							subtitle={"Founder"}
							image={NickImage}
							text={
								"Hello everyone, I'm nick! I'm one of the co-founders of this project and am very excited to show you what I can provide with my experience. To give you a small gist of what I've done in the past few years, I've founded and owned four multi-million dollar companies gaining tons of experience to run successful projects. I will put my all into this project and have this be something that can change the world one day."
							}
							twitter="nickbruhman"
						/>
						<TeamCard
							title={"Jello"}
							subtitle={"Admin"}
							image={JelloImage}
							text={
								"Sup im jello. I am a 22-year-old working on my last year of school in Vancovuer Canada. I've discovered the Crypto community and instantly fell in love with it. I find myself immersing myself in the Crypto/NFT community and find myself amazed by how pure talent in thus community. Always feel free to ping me in chat to spark up a conversation! follow me! im cute!"
							}
							twitter="jellonft"
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
