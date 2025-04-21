"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({
	text,
	color = "255, 255, 255",
}: {
	text: string;
	color?: string;
}) {
	const colors = [`rgb(${color})`];

	const [currentColors, setCurrentColors] = React.useState(colors);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			const shuffled = [...colors].sort(() => Math.random() - 0.5);
			setCurrentColors(shuffled);
			setCount((prev) => prev + 1);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	// Split by word but keep spaces
	const words = text.split(/(\s+)/);

	let globalIndex = 0;

	return (
		<div className="inline">
			{words.map((word, wordIdx) => {
				if (word.trim() === "") {
					// If it's a space, render it as a regular space
					return (
						<span
							key={`space-${wordIdx}`}
							className="inline-block w-[0.5ch]"
						/>
					);
				}

				return (
					<span
						key={`word-${wordIdx}`}
						className="whitespace-nowrap inline-block"
					>
						{word.split("").map((char, i) => {
							const color =
								currentColors[
									globalIndex % currentColors.length
								];
							const charIndex = globalIndex;
							globalIndex++;

							return (
								<motion.span
									key={`${char}-${count}-${charIndex}`}
									initial={{ y: 0 }}
									animate={{
										color,
										y: [0, -3, 0],
										scale: [1, 1.01, 1],
										filter: [
											"blur(0px)",
											`blur(5px)`,
											"blur(0px)",
										],
										opacity: [1, 0.8, 1],
									}}
									transition={{
										duration: 0.5,
										delay: charIndex * 0.05,
									}}
									className="inline-block tracking-tight"
								>
									{char}
								</motion.span>
							);
						})}
					</span>
				);
			})}
		</div>
	);
}
