"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CardioCard = ({
	title,
	animation,
	details,
}: {
	title: string;
	animation: string;
	details: string;
}) => {
	const animationRef = useRef<LottieRefCurrentProps>(null);
	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8 flex flex-col items-start justify-start gap-4">
			<Lottie
				lottieRef={animationRef}
				animationData={animation}
				className="h-40"
			/>
			<div className="space-y-1">
				<h4 className="text-xl font-semibold mb-1">{details}</h4>
				<p className="text-muted-foreground text-sm">{title}</p>
			</div>
		</div>
	);
};

export default CardioCard;
