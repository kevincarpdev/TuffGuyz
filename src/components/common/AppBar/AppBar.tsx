import React, { useState, useContext, useEffect } from "react";
import PropTypes, { InferProps } from "prop-types";
import { navigate, useLocation } from "@reach/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";
import { Web3Context } from "../../../context/Web3Context";
import Logo from "../../../assets/img/logo.png";
import s from "./AppBar.module.css";
import cn from "classnames";
import throttle from "lodash.throttle";

interface MenuType {
	name: string;
	link: string;
	title: string;
	icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
	submenu?: Array<{
		name: string;
		title: string;
		icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
		link: string;
	}>;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	title: {
		flexGrow: 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	mainContent: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginTop: theme.spacing(12),
	},
	routerContainer: {
		width: "100%",
	},
	blockchainText: {
		marginRight: theme.spacing(2),
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function CustomAppBar(
	props: InferProps<typeof CustomAppBar.propTypes>,
): JSX.Element {
	const { menu: menuList, onLogout } = props;
	const classes = useStyles();
	const theme = useTheme();
	const { pathname } = useLocation();
	const { web3Accounts, web3BlockchainData } = useContext(Web3Context);
	const { name: blockchainName } = web3BlockchainData;
	const initialOpenDrawerValue = () => {
		const val = {};
		Object.keys(menuList).map((menuKey: string) => {
			menuList[menuKey].map((menuDetails: MenuType) => {
				const { name, submenu } = menuDetails;
				if (submenu?.length > 0) {
					val[name] = false;
				}
			});
		});

		return val;
	};
	const [openAppbar, setOpenAppbar] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(initialOpenDrawerValue());

	/**
	 * @description Handle Submenu Collapse/Expansion when Submenu is clicked
	 *
	 * @param {String} name - The name of the menu
	 * @param {String} link - The link of the menu
	 * @param {Boolean} isSubmenuExist - Determine whether submenu exist on the menu
	 * @param {Boolean} isSelected - Determines whether the submenu is selected or not
	 */
	const handleSubmenu = ({ name, link, isSubmenuExist, isSelected }) => {
		if (openAppbar) {
			if (isSubmenuExist) {
				setOpenDrawer({
					...initialOpenDrawerValue(),
					[name]: isSelected ? !openDrawer[name] : true,
				});
			} else if (!isSelected) {
				setOpenDrawer({ ...initialOpenDrawerValue() });
			}
		}

		navigate(`/${link}`);
	};

	useEffect(() => {
		// Close Drawer Submenu when AppBar closed
		if (!openAppbar) {
			setOpenDrawer({ ...initialOpenDrawerValue() });
		} else {
			// Open the Drawer Submenu on path
		}
	}, [openAppbar]);
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			const offset = 0;
			const { scrollTop } = document.documentElement;
			const scrolled = scrollTop > offset;

			if (hasScrolled !== scrolled) {
				setHasScrolled(scrolled);
			}
		}, 200);

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	return (
		<>
			<div className={cn(s.menuBar, { "shadow-magical": hasScrolled })}>
				<a href="/">
					<img src={Logo} alt="Tuff Guys" className="logo" />
				</a>
				<div className={s.mainNav}>
					<ul className={s.mainNavList}>
						<li>
							<a href="/fuse">Fuse</a>
						</li>
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#roadmap">Roadmap</a>
						</li>
						<li>
							<a href="/#traits">Traits</a>
						</li>
						<li>
							<a href="/#team">Team</a>
						</li>
						<li>
							<a href="/#contact">Contact</a>
						</li>
					</ul>
				</div>
				<div className="wallet">
					<button className="button" onClick={onLogout}>
						{web3Accounts.length > 0 && ` (${web3Accounts[0]})`}
					</button>
				</div>
			</div>
			{/* <Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: openAppbar,
					[classes.drawerClose]: !openAppbar,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: openAppbar,
						[classes.drawerClose]: !openAppbar,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={() => setOpenAppbar(false)}>
						{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{menuList?.top.map((menu: MenuType) => {
						const { name, title, icon: Icon, link, submenu } = menu;
						const isSubmenuExist = submenu?.length > 0;
						const isSelected =
							(openAppbar && pathname === `/${link}`) ||
							(!openAppbar && pathname.includes(`/${link}`));

						return (
							<>
								<ListItem
									button
									key={name}
									onClick={() =>
										handleSubmenu({ name, link, isSubmenuExist, isSelected })
									}
									selected={isSelected}
								>
									<ListItemIcon>
										<Icon />
									</ListItemIcon>
									<ListItemText primary={title} />
									{isSubmenuExist && <SubmenuArrow open={openDrawer[name]} />}
								</ListItem>
								{isSubmenuExist && (
									<Collapse in={openDrawer[name]} timeout="auto" unmountOnExit>
										{submenu.map((sm) => {
											const {
												name: smName,
												title: smTitle,
												icon: SMIcon,
												link: smLink,
											} = sm;
											return (
												<List component="div" key={smName} disablePadding>
													<ListItem
														button
														onClick={() => navigate(`/${link}/${smLink}`)}
														selected={pathname === `/${link}/${smLink}`}
														className={classes.nested}
													>
														<ListItemIcon>
															<SMIcon />
														</ListItemIcon>
														<ListItemText primary={smTitle} />
													</ListItem>
												</List>
											);
										})}
									</Collapse>
								)}
							</>
						);
					})}
				</List>
				<Divider />
				<List>
					{menuList.bottom.map((menu: MenuType) => {
						const { name, title, icon: Icon } = menu;
						return (
							<ListItem
								button
								key={name}
								onClick={() => navigate(`/${name}`)}
								selected={location.pathname === `/${name}`}
							>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={title} />
							</ListItem>
						);
					})}
				</List>
			</Drawer> */}
		</>
	);
}

CustomAppBar.propTypes = {
	menu: PropTypes.shape({
		top: PropTypes.array.isRequired,
		bottom: PropTypes.array.isRequired,
	}).isRequired,
	onLogout: PropTypes.func.isRequired,
};
