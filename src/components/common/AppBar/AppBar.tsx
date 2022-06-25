import React, { useContext } from "react";
import PropTypes, { InferProps } from "prop-types";
import { Web3Context } from "../../../context/Web3Context";
import Logo from "../../../assets/img/logo.png";
import s from "./AppBar.module.css";
import cn from "classnames";

export default function CustomAppBar(
	props: InferProps<typeof CustomAppBar.propTypes>,
): JSX.Element {
	const { onLogout } = props;
	const { web3Accounts } = useContext(Web3Context);


	return (
		<>
			<div className={cn(s.menuBar)}>
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
