import { hows } from "@/constants";
import Image from "next/image";
import { ColourfulText } from "./ui/colourful-text";

const How = () => {
	return (
		<div className="bg-[#1F2937] text-white py-16">
			<div className="container">
				<div>
					<h2
						data-aos="fade-up"
						className="mb-2 uppercase text-xl md:text-2xl lg:text-3xl font-semibold"
					>
						How <span className="text-primary">Cardio Track</span>{" "}
						<ColourfulText text={"Works"} />
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="100"
						className="text-base text-gray-200"
					>
						Getting started is easy. Track your workouts and improve
						your fitness in just a few simple steps.
					</p>
				</div>
				<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-4 gap-y-10">
					{hows.map(
						({ image, title, description, number }, index) => (
							<div
								data-aos="fade-up"
								data-aos-delay={index * 200}
								key={index}
								className="relative"
							>
								<Image
									src={image}
									alt={`${title}'s picture`}
									width={1000}
									height={1000}
									className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-auto h-auto object-cover rounded-lg aspect-video"
								/>
								<div className="mt-6">
									<h4 className="uppercase font-medium text-lg">
										{title}
									</h4>
									<p className="text-base text-gray-200 mt-1">
										{description}
									</p>
								</div>
								<div className="bg-primary text-white rounded-full h-10 w-10 inline-flex items-center justify-center absolute top-[-18px] left-[-15px]">
									<h5 className="text-xl font-semibold">
										{number}
									</h5>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default How;
