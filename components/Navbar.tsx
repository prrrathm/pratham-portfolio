import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="fixed top-0 inset-x-0 py-5 hidden md:flex justify-center items-center">
			<div className="flex justify-between backdrop-blur bg-gray-200/50 w-[40vw] text-md px-10 py-3 rounded-full">
				<Link href="" className="uppercase font-bold text-gray-600">
					Pratham Sharma
				</Link>
				<ul className="flex gap-10 font-semibold text-gray-600/50">
					<li>
						<Link
							href=""
							className="drop-shadow-md hover:text-blue-400/100 hover:drop-shadow-xl hover:ease-out duration-200"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href=""
							className="drop-shadow-md hover:text-blue-400/100 hover:drop-shadow-xl hover:ease-out duration-200"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href=""
							className="drop-shadow-md hover:text-blue-400/100 hover:drop-shadow-xl hover:ease-out duration-200"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
