import React from "react";
import Link from "next/link";
const Footer = () => {
	return (
		<div className="w-full pt-20 pb-10 md:pb-64 px-5">
			<div className="flex gap-2 text-lg text-gray-400 font-semibold">
				<Link
					href="https://github.com/prrrathm"
					target="_blank"
					className="text-gray-500/80 drop-shadow-sm hover:text-gray-500 hover:ease-in duration-150 hover:drop-shadow-lg cursor-pointer"
				>
					Github
				</Link>
				<Link
					href="https://www.linkedin.com/in/pratham-sharma-278aab212/"
					target="_blank"
					className="text-gray-500/80 drop-shadow-sm hover:text-gray-500 hover:ease-in duration-150 hover:drop-shadow-lg cursor-pointer"
				>
					Linkedin
				</Link>
				<Link
					href="https://twitter.com/prrrathm"
					target="_blank"
					className="text-gray-500/80 drop-shadow-sm hover:text-gray-500 hover:ease-in duration-150 hover:drop-shadow-lg cursor-pointer"
				>
					Twitter
				</Link>
			</div>
			<div className="flex text-lg text-gray-400/90 font-medium gap-1 ">
				Build with
				<Link
					href=""
					className="hover:underline underline-offset-2 text-blue-400/80"
				>
					Next.js
				</Link>
				,
				<Link
					href=""
					className="hover:underline underline-offset-2 text-blue-400/80"
				>
					Tailwind
				</Link>
				and
				<Link
					href=""
					className="hover:underline underline-offset-2 text-blue-400/80"
				>
					Vercel
				</Link>
				.
			</div>
		</div>
	);
};

export default Footer;
