"use client";
import Link from "next/link";
import React, { useState } from "react";
import { VscColorMode } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import Socials from "./Socials";
import classNames from "classnames";
const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	console.log(theme);
	const [socialsCard, setSocialsCard] = useState(false);
	const closeSocialsCard = () => {
		setSocialsCard(!socialsCard);
	};
	return (
		<div className="fixed top-0 left-0 right-0 md:left-10 md:right-full md:inset-y-9 py-6 px-2 md:py-5 md:flex justify-center items-center">
			<div className="flex md:flex-col justify-between items-center dark:bg-zinc-800/40 bg-gray-100/50 border border-gray-300 dark:border-gray-700 md:min-h-[90vh] text-md px-5 py-3 md:px-4 md:py-10 rounded-3xl backdrop-blur-sm md:backdrop-blur-none">
				<Link
					href=""
					className="transition-colors hover:bg-zinc-400/20 p-1 rounded-xl"
				>
					<img src="./program-badges-32.png" />
				</Link>
				<ul className="flex md:flex-col gap-5 font-semibold text-gray-600/50">
					<li>
						<button
							className="drop-shadow-md hover:text-blue-400/100 hover:drop-shadow-xl hover:ease-out duration-200 transition-colors hover:bg-zinc-400/20 p-2 rounded-lg"
							onClick={() =>
								theme == "dark" ? setTheme("light") : setTheme("dark")
							}
						>
							<VscColorMode className="h-5 w-5 text-gray-800 dark:text-gray-300" />
						</button>
					</li>
					<li>
						<button
							className="drop-shadow-md hover:text-blue-400/100 hover:drop-shadow-xl hover:ease-out duration-200 transition-colors hover:bg-zinc-400/20 p-2 rounded-lg"
							onClick={() => {
								console.log("menu switch");
								setSocialsCard(!socialsCard);
							}}
						>
							<RxHamburgerMenu className="h-5 w-5 text-gray-800 dark:text-gray-300" />
						</button>
					</li>
				</ul>
			</div>
			<div
				className={classNames({
					"fixed inset-0 dark:bg-white/10 bg-black/10 transition-opacity ease-in-out duration-2000":
						true,
					"translate-y-[1000px] opacity-0": !socialsCard,
					" translate-x-0 opacity-100": socialsCard,
				})}
				onClick={() => {
					// props.visible = false;
					setSocialsCard(!socialsCard);
				}}
			></div>

			<Socials visible={socialsCard} crossClick={closeSocialsCard} />
		</div>
	);
};

export default Navbar;
