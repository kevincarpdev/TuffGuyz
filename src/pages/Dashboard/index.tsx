import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useSnackbar } from "notistack";
import {
	Router,
	navigate,
	useLocation,
	RouteComponentProps,
} from "@reach/router";
import AppBar from "../../components/common/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import AppBarList from "../../list/appbar";
import SmartContracts from "./SmartContracts";
import Documents from "./Documents";
import Web3ContextProvider from "../../context/Web3Context";
import "../../assets/styles.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	mainContent: {
		flexGrow: 1,
		marginTop: theme.spacing(12),
	},
	routerContainer: {
		width: "100%",
	},
}));

// eslint-disable-next-line
export default function Index(_props: RouteComponentProps): JSX.Element {
	const classes = useStyles();
	const { enqueueSnackbar } = useSnackbar();
	const { user, logout, setUserData, isUserUpdating } = useMoralis();
	const { pathname } = useLocation();

	/**
	 * @description Handle user logout with Moralis
	 * @example
	 * const res = await onLogout();
	 *
	 */
	const onLogout = async () => {
		try {
			await logout();
			navigate("/login");
		} catch (e) {
			enqueueSnackbar("Logout Failed.", { variant: "error" });
		}
	};

	useEffect(() => {
		if (pathname === "/") {
			navigate("/fuse");
		}
	}, [pathname]);

	return (
		<Web3ContextProvider>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar menu={AppBarList} onLogout={onLogout} />
				<main className={classes.mainContent}>
					<div className={classes.toolbar}>
						<Router className={classes.routerContainer}>
							<Dashboard path="fuse" user={user} />
							<Settings
								path="settings"
								user={user}
								setUserData={setUserData}
								loading={isUserUpdating}
							/>
							<SmartContracts path="smart-contracts/*" />
							<Documents path="documents" />
						</Router>
					</div>
				</main>
			</div>
		</Web3ContextProvider>
	);
}
