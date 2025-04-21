import About from "@/components/About";
import Footer from "@/components/Footer";
import How from "@/components/How";
import Join from "@/components/Join";
import Showcase from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import Why from "@/components/Why";

const page = () => {
	return (
		<div>
			<Showcase />
			<About />
			<Why />
			<How />
			<Testimonials />
			<Join />
			<Footer />
		</div>
	);
};

export default page;
