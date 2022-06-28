// Export HTML to Canvas: https://blog.logrocket.com/export-react-components-as-images-html2canvas/
// Moralis Docs: https://docs.moralis.io/moralis-dapp/web3-api/token#getalltokenids
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/scss/_tuff.scss";
import { useSnackbar } from "notistack";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
const styles = {
	NFTz: {
		display: "flex",
		flexWrap: "wrap",
		WebkitBoxPack: "start",
		justifyContent: "flex-start",
		margin: "0 auto",
		maxWidth: "1000px",
		width: "100%",
		gap: "10px",
	},
};
export default function Fuse(): JSX.Element {
	const { Moralis } = useMoralis();
	const { isWeb3Enabled, enableWeb3, isInitialized } = useMoralis();
	// const { user, setUserData, loading } = props;
	const [NFTs, setNFTs] = useState([]);

	const { enqueueSnackbar } = useSnackbar();
	// const onUpdateUserData = async () => {
	// 	try {
	// 		const { username, email } = values;
	// 		await setUserData({
	// 			username,
	// 			email,
	// 		});
	// 		enqueueSnackbar("Update User Data Successful.", { variant: "success" });
	// 	} catch (e) {
	// 		enqueueSnackbar("Update User Data Failed.", { variant: "error" });
	// 	}
	// };




	function next(item: string) {
		const next_num = dressupState[item].current + 1;
		// if next_num exceeds total, restart (set current to 0)
		const new_current = next_num < dressupState[item].total ? next_num : 0;
		updateDressUp(item, new_current);
	}

	function updateDressUp(item: string, new_current: number) {
		setDressupState({
			...dressupState,
			[item]: {
				current: (dressupState[item].current = new_current),
				total: dressupState[item].total,
			},
		});
	}

	function randomize() {
		Object.keys(dressupState).map((item) =>
			updateDressUp(
				item,
				Math.floor(Math.random() * Math.floor(dressupState[item].total)),
			),
		);
	}
	// const [dressupState, setDressupState] = useState({
	// 	eyes: { current: 0, total: 9 },
	// 	ears: { current: 0, total: 3 },
	// 	mouth: { current: 0, total: 4 },
	// 	nose: { current: 0, total: 3 },
	// 	clothes: { current: 0, total: 3 },
	// });
	const [dressupState, setDressupState] = useState({
		Backgrounds: { current: 0, total: 31 },
		Clothes: { current: 0, total: 57 },
		Colors: { current: 0, total: 19 },
		Headwear: { current: 0, total: 66 },
		Mouthwear: { current: 0, total: 49 },
		Tears: { current: 0, total: 13 },
	});

	// @ts-ignore
	const Web3Api = useMoralisWeb3Api();

	const fetchAllTokenIds = async () => {
		const options = {
			address: "0x3bcB740538902d5473D554bF6aAd1218228f37e0",
			chain: "eth",
		};
		// @ts-ignore
		const NFTs = await Web3Api.token.getAllTokenIds(options);
		console.log(NFTs);

		const counter = NFTs.result.length;
		const tuffGuys = [];
		const syncedMetadata = [];


		for (let x = 0; x < counter; x++) {
			const obj = JSON.parse(NFTs.result[x].metadata);
			syncedMetadata.push(obj);
			tuffGuys.push(NFTs.result[x]);
		}
		console.log("Meta Data: ", syncedMetadata);
		console.log("Tuff Guys: ", tuffGuys);

	};

	useEffect(() => {

		if (!isWeb3Enabled) return;
		fetchAllTokenIds()
	}, [isWeb3Enabled]);


	return (
		<Grid
			className="container"
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<div id="container">
				<div id="body"></div>
				{Object.keys(dressupState).map((item) => (
					<div
						id={item}
						className={item + (dressupState[item].current + 1)}
						key={item}
					></div>
				))}
				<div id="controls">
					<h4>Choose Your Traits</h4>
					{Object.keys(dressupState).map((item) => (
						<input
							className="button"
							type="button"
							value={"next " + item}
							key={item}
							id={"next" + item}
							onClick={() => next(item)}
						/>
					))}
					<input
						className="button"
						type="button"
						value="RANDOMIZE"
						id="randomize"
						onClick={() => randomize()}
					/>
				</div>
			</div>
		</Grid>
	);
}
