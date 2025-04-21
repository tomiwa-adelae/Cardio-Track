import React from "react";
import Logo from "./shared/Logo";
import { showcaseVideo } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import Header from "./Header";
import { ColourfulText } from "./ui/colourful-text";

const Showcase = () => {
	return (
		<div
			// style={{
			// 	backgroundImage: `url(/assets/images/landing-image.jpg)`,
			// }}
			className={`flex items-center justify-center bg-no-repeat bg-center bg-cover relative text-white`}
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src={showcaseVideo} type="video/mp4" />
			</video>
			<div className={`container z-50`}>
				<div className="flex flex-col items-start justify-between h-screen">
					<Header color={"255,255,255"} />
					<div
						className="flex-1 w-full py-16 flex flex-col md:items-center justify-center md:text-center"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<h1 className="uppercase text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-bold">
							Track your Cardio <br className="hidden lg:block" />{" "}
							Stay <ColourfulText text={"Healthy"} />
						</h1>
						<p className="text-base lg:text-lg text-gray-100 mb-6 mt-2">
							A simple and effective way to log, analyze, and
							improve your cardio workouts.
						</p>
						<Button
							asChild
							size={"lg"}
							// variant={"secondary"}
							className="rounded-full"
						>
							<Link href="/sign-in">Get started now</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/30" />
		</div>
	);
};

export default Showcase;
