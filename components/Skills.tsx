import React from "react";

const Skills = () => {
	return (
		<div className="flex flex-col gap-5 pb-10">
			<h2 className=" text-3xl font-bold">Skills</h2>
			<div className="flex flex-wrap md:flex-nowrap gap-5">
				{/* Languages */}
				<div className="flex flex-col">
					<h3 className="text-xl font-semibold text-gray-700">Languages</h3>
					<ul className="ml-2">
						<li className="flex gap-2">
							<div className="text-gray-500">#1</div>
							<div>JavaScript</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#2</div>
							<div>Python</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#3</div>
							<div>C++</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#4</div>
							<div>CSS</div>
						</li>
					</ul>
				</div>
				{/* Frameworks */}
				<div className="flex flex-col">
					<h3 className="text-xl font-semibold text-gray-700">Frameworks</h3>
					<ul className="ml-2">
						<li className="flex gap-2">
							<div className="text-gray-500">#1</div>
							<div>Next Js</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#2</div>
							<div>React Js</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#3</div>
							<div>Django</div>
						</li>
					</ul>
				</div>
				{/* Languages */}
				<div className="flex flex-col">
					<h3 className="text-xl font-semibold text-gray-700">Languages</h3>
					<ul className="ml-2">
						<li className="flex gap-2">
							<div className="text-gray-500">#1</div>
							<div>JavaScript</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#2</div>
							<div>Python</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#3</div>
							<div>C++</div>
						</li>
						<li className="flex gap-2">
							<div className="text-gray-500">#4</div>
							<div>CSS</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
