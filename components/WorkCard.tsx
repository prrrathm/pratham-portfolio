import React from "react";
import Link from "next/link";
const WorkCard = (props: {
	title: string;
	desc: string;
	link: string;
	skills: Array<string>;
}) => {
	return (
		<div>
			<Link
				href={props.link}
				target="_blank"
				className="flex flex-col border-2 border-blue-300 hover:border-blue-400 cursor-pointer rounded-md py-3 px-5 gap-1 shadow-sm dark:shadow-blue-500/10 hover:shadow-xl hover:ease-in duration-200 self-stretch md:w-min hover:scale-105 hover:bg-gradient-to-br from-cyan-500/0 from-90% to-blue-500/30 to-10% transition-all"
			>
				<h3
					className="font-bold text-xl"
				>
					{props.title}
				</h3>
				<p className="text-sm">{props.desc}</p>
				<div className="py-2 flex gap-2">
					{props.skills.map((item, iter) => {
						return (
							<div
								key={iter}
								className="bg-gray-200 dark:bg-zinc-800 rounded-full px-3 py-1 text-xs"
							>
								{item}
							</div>
						);
					})}
				</div>
			</Link>
		</div>
	);
};

export default WorkCard;
