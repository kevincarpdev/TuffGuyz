// Export HTML to Canvas: https://blog.logrocket.com/export-react-components-as-images-html2canvas/
// Moralis Docs: https://docs.moralis.io/moralis-dapp/web3-api/token#getalltokenids
import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/scss/_tuff.scss";
import CharBuilder from "../../components/modules/CharBuilder";

export default function Fuse(): JSX.Element {


	return (
		<Grid
			className="container"
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<div id="container">
				<CharBuilder />
			</div>
		</Grid>
	);
}
