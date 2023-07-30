import React from "react";
import classNames from "classnames";
import { RxCross2 } from "react-icons/rx";
const Socials = (props: { visible: boolean; crossClick: any }) => {
	// visible = false;
	return (
		<>
			<div
				className={classNames({
					"fixed inset-x-8 inset-y-20 md:left-auto md:right-6 md:inset-y-10 bg-white/90 dark:bg-black/90 md:bg-white/10 md:dark:bg-black/50 rounded-3xl md:w-[25vw] shadow-2xl dark:shadow-2xl dark:shadow-black flex flex-col justify-between transition-transform ease-in-out duration-700 backdrop-blur-none md:backdrop-blur-md md:dark:backdrop-blur-sm":
						true,
					"translate-x-[1000px]": !props.visible,
					" translate-x-0": props.visible,
				})}
			>
				<ul
					className="flex flex-col gap-4 px-10 py-10 text-3xl font-bold"
					style={{ fontFamily: "'Old Standard TT', serif" }}
				>
					<li
						className="flex flex-row-reverse cursor-pointer"
						onClick={() => {
							props.crossClick();
						}}
					>
						<RxCross2 />
					</li>
					<li className="py-3">
						<img src="./program-badges-96.png" />
					</li>
					<li className="cursor-pointer transition-colors hover:text-blue-400/100">
						LinkedIn
					</li>
					<li className="cursor-pointer transition-colors hover:text-blue-400/100">
						Twitter
					</li>
					<li className="cursor-pointer transition-colors hover:text-blue-400/100">
						Github
					</li>
					<li className="cursor-pointer transition-colors hover:text-blue-400/100">
						Instagram
					</li>
				</ul>
				<div className="h-[15vh] bg-white border-t-2 border-black/20 dark:bg-black  rounded-b-3xl flex items-center justify-center">
					Spotify stuff
				</div>
			</div>
		</>
	);
};

export default Socials;
