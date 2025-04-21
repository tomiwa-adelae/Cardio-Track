import Image from "next/image";
import React from "react";
import { ColourfulText } from "./ui/colourful-text";

const About = () => {
	return (
		<div id="about" className="bg-white text-black py-16">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<div
					className="flex flex-col items-start justify-center"
					data-aos="fade-up"
				>
					<h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
						We have a{" "}
						<span className="text-primary">Great Deal</span> of{" "}
						<br />
						Experience with{" "}
						<ColourfulText color={"0,0,0"} text={"Fitness"} />
					</h2>
					<p className="text-base text-muted-foreground">
						Cardio Track is a simple and powerful web application
						built to help you stay consistent with your cardio
						workouts. Whether you're running, cycling, walking, or
						jogging, Cardio Track makes it easy to log your
						sessions, monitor your heart rate, and visualize your
						progress over time.
						<br />
						We believe that staying fit shouldn't be complicated —
						that’s why Cardio Track focuses on simplicity,
						usability, and real results. With every session you
						record, the app gives you deeper insights into your
						performance so you can stay motivated, set goals, and
						build a healthier lifestyle at your own pace.
					</p>
				</div>
				<div data-aos="fade-left" data-aos-delay="200">
					<Image
						src={"/assets/images/about-us.jpg"}
						alt={"About us image"}
						width={1000}
						height={1000}
						className="size-full object-cover aspect-auto rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
