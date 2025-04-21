"use client";
import { whys } from "@/constants";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";
import { ColourfulText } from "./ui/colourful-text";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Why = () => {
	const animationRef = useRef<LottieRefCurrentProps>(null);
	return (
		<div id="features" className="bg-[#EFF6FF] py-16">
			<div className="container">
				<div>
					<h2
						data-aos="fade-up"
						className="mb-2 uppercase text-xl md:text-2xl lg:text-3xl font-semibold"
					>
						Why choose{" "}
						<span className="text-primary">
							Cardio{" "}
							<ColourfulText
								color={"1, 113, 233"}
								text={"Track"}
							/>
						</span>
					</h2>
					<p
						className="text-base text-muted-foreground"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						Our comprehensive platform gives you all the tools to
						monitor, analyze, and improve your cardiovascular
						fitness journey.
					</p>
				</div>
				<div>
					<div className="grid grid-col-1 md:grid-cols-2 mt-8 gap-8">
						{whys.map(
							(
								{ title, animation, name, description },
								index
							) => {
								const animationData = animation;
								if (!animationData) return null; // skip if animation is invalid
								return (
									<div
										key={index}
										className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden rounded-lg"
										data-aos="fade-up"
										data-aos-delay={index * 100}
									>
										<Lottie
											lottieRef={animationRef}
											animationData={animationData}
											className="aspect-video"
										/>
										<div className="grid pt-4 pb-6 px-4">
											<h4 className="uppercase text-primary font-medium text-lg">
												{title}
											</h4>
											<p className="text-base text-muted-foreground">
												{description}
											</p>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Why;
