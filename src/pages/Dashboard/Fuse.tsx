import React, { useState, useMemo } from "react";
import PropTypes, { InferProps } from "prop-types";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";
import { RouteComponentProps } from "@reach/router";
import "../../assets/scss/_tuff.scss";

export default function Fuse(
	props: InferProps<typeof Fuse.propTypes> & RouteComponentProps,
): JSX.Element {
	// const { user, setUserData, loading } = props;
	// const { enqueueSnackbar } = useSnackbar();
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
	const [dressupState, setDressupState] = useState({
		eyes: { current: 0, total: 9 },
		ears: { current: 0, total: 3 },
		mouth: { current: 0, total: 4 },
		nose: { current: 0, total: 3 },
		clothes: { current: 0, total: 3 },
	});


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

Fuse.propTypes = {
	user: PropTypes.any.isRequired,
	setUserData: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};
