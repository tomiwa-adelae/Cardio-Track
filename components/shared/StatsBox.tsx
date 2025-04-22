"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { formatWithCommas } from "@/lib/utils";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

const StatsBox = ({
	animation,
	title,
	description,
	number,
	percentageChange,
}: {
	animation: string;
	title: string;
	description: string;
	number: string | number;
	percentageChange?: number;
}) => {
	const animationRef = useRef<LottieRefCurrentProps>(null);

	// Determine the color and icon based on percentageChange
	const renderPercentageChange = () => {
		if (percentageChange === undefined) return null;

		let color = "text-gray-500";
		let icon = <Minus className="h-5 w-5" />;

		if (percentageChange > 0) {
			color = "text-green-500";
			icon = <ArrowUp className="h-5 w-5" />;
		} else if (percentageChange < 0) {
			color = "text-red-500";
			icon = <ArrowDown className="h-5 w-5" />;
		}

		return (
			<div
				className={`flex items-center ${color} text-sm font-medium mt-2`}
			>
				{icon}
				<span className="mt-1">
					{Math.abs(percentageChange)}% from last week
				</span>
			</div>
		);
	};

	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8 flex justify-between items-center md:flex-col lg:flex-row md:text-center lg:text-left">
			<div>
				<p className="text-muted-foreground text-sm">{description}</p>
				<h4 className="text-4xl lg:text-5xl font-semibold mt-2">
					{formatWithCommas(number)}
				</h4>
				{/* <p className="text-sm text-green-600 mt-2">
					+12% from last week
				</p> */}
				{renderPercentageChange()}
			</div>
			<Lottie
				lottieRef={animationRef}
				animationData={animation}
				className="h-40"
			/>
		</div>
	);
};

export default StatsBox;
