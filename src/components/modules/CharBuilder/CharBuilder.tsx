import React, { useState, useEffect } from "react";
import s from "./CharBuilder.module.css";
import cn from "classnames";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useSnackbar } from "notistack";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Background from "../../../assets/img/traits/Backgrounds/Blue Doodles.png";
import Skin from "../../../assets/img/traits/Colors/Blue Skin.png";
import Head from "../../../assets/img/traits/Colors/Default Head.png";
import Elvis from "../../../assets/img/traits/Headwear/Elvis Hair.png";
import Tears from "../../../assets/img/traits/Tears/Tears 6.png";
import Headwear from "../../../assets/img/traits/Headwear/Army Helmet.png";
import LiquidBeard from "../../../assets/img/traits/Mouthwear/Mouthwear colors/Liquid Beard Pink.png";
import Emperor from "../../../assets/img/traits/Clothes/Emperor.png";
import { FaQuestion } from 'react-icons/fa';


export default function Hero(): JSX.Element {
	const { isWeb3Enabled } = useMoralis();
	// const { Moralis } = useMoralis();
	// const { user, setUserData, loading } = props;
	// const [NFTs, setNFTs] = useState([]);

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
		if (!isWeb3Enabled) { enqueueSnackbar("Please connect to MetaMask and refresh.", { variant: "error" }); return }
		fetchAllTokenIds();
	}, [isWeb3Enabled]);

	return (
		<>
			<section id="builder" className={cn(s.root,)}>
				<div className="container">
					<div className={s.fuseWindow}>
						<div className={s.fuseRow}>
							<div className={s.fuseStage}>
								<div className={s.stepPanel}>
									<div className={s.frame}>
										<img src={Background} alt="Background" className={s.bgImage} />
										<img src={Head} alt="Head" className={s.head} />
										<img src={Skin} alt="Skin" className={s.skin} />
										<img src={Elvis} alt="Hair" className={s.hair} />
										<img src={Tears} alt="Tears" className={s.tears} />
										<img src={Headwear} alt="Headwear" className={s.headwear} />
										<img src={LiquidBeard} alt="Mouthwear" className={s.mouthwear} />
										<img src={Emperor} alt="Clothes" className={s.clothes} />
										{/* <div id="body"></div> */}
										{Object.keys(dressupState).map((item) => (
											<div
												id={item}
												className={item + (dressupState[item].current + 1)}
												key={item}
											></div>
										))}
									</div>
								</div>
								<div className={s.controls}>
									<h3>Choose Your Traits</h3>
									<div className={s.traitSliders}>
										{Object.keys(dressupState).map((item) => (
											<div className={s.traitItem}>
												<h4>{item}</h4>
												<Swiper
													navigation
													spaceBetween={10}
													slidesPerView={3}
												>
													<SwiperSlide>
														{/* <input
													className="button"
													type="button"
													value={"next"}
													key={item}
													id={"next"}
													onClick={() => next(item)}
												/> */}
														<div><h5>{item} #1</h5></div>
													</SwiperSlide>
													<SwiperSlide>
														<div><h5>{item} #2</h5></div>
													</SwiperSlide>
													<SwiperSlide>
														<div><h5>{item} #3</h5></div>
													</SwiperSlide>
												</Swiper>
											</div>
										))}
									</div>



									<input
										className="button"
										type="button"
										value="RANDOMIZE"
										id="randomize"
										onClick={() => randomize()}
									/>
								</div>
							</div>
						</div>
						<h3>My Tuff Guys</h3>
						<div className={s.nftRow}>
							<div className={s.nftItem}>
								<FaQuestion size={70} />
							</div>
							<div className={s.nftItem}>
								<FaQuestion size={70} />
							</div>
							<div className={s.nftItem}>
								<FaQuestion size={70} />
							</div>
						</div>
					</div>
					
				</div>
			</section>
		</>
	);
}
