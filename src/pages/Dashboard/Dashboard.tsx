import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { RouteComponentProps } from "@reach/router";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from "../../components/modules/Hero";
import Mission from "../../components/modules/Mission";

export default function Dashboard(
	props: InferProps<typeof Dashboard.propTypes> & RouteComponentProps,
): JSX.Element {
	return (
		<>
			<Parallax pages={5} style={{ top: '0', left: '0' }}>
				<ParallaxLayer
					offset={0}
					speed={2.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Hero />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={3}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Mission />
						
						<h4>RoadMap</h4>
				</ParallaxLayer>
				<ParallaxLayer
					offset={2}
					speed={1.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236, 240, 244)', color: '#000' }}>
						<h3>Utility</h3>
				</ParallaxLayer>
				<ParallaxLayer
					offset={3}
					speed={0.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3a3d5e' }}>
						<h3>Rarity</h3>
					</ParallaxLayer>
				<ParallaxLayer
					offset={4}
					speed={2.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236, 240, 244)', color: '#000' }}>
					<h3>Meet The Team</h3>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

Dashboard.propTypes = {
	user: PropTypes.any.isRequired,
};
