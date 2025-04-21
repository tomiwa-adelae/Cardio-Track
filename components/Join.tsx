import { joinVideo } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ColourfulText } from "./ui/colourful-text";

const Join = () => {
	return (
		<div className="relative py-16">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src={joinVideo} type="video/mp4" />
			</video>
			<div className="grid container text-white z-50 text-center">
				<div className="z-50 flex items-center min-h-[70vh] flex-col justify-center">
					<div>
						<h2
							data-aos="fade-up"
							className="font-semibold uppercase text-2xl md:text-4xl"
						>
							Join the healthy <ColourfulText text={"family"} />
						</h2>
						<p className="text-base mt-1.5">
							Staying healthy by gyming can help physical activity
							stimulates many brain chemicals that may leave you
						</p>
					</div>
					<Button
						data-aos="fade-up"
						data-aos-delay="200"
						className="rounded-full mt-4"
						size={"lg"}
						asChild
					>
						<Link href="/sign-up">Get Started</Link>
					</Button>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/40" />
		</div>
	);
};

export default Join;
