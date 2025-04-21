import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants";
import { ColourfulText } from "./ui/colourful-text";

export function Testimonials() {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2
					data-aos="fade-up"
					className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold uppercase"
				>
					What our users{" "}
					<ColourfulText color={"0,0,0"} text={"say"} />
				</h2>
				<AnimatedTestimonials testimonials={testimonials} />
				{/* <Button className="mt-10" asChild size={"lg"}>
					<Link href="/register">Register today</Link>
				</Button> */}
			</div>
		</div>
	);
}
