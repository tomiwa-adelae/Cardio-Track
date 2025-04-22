import { Heart } from "lucide-react";
import Link from "next/link";
import { ColourfulText } from "../ui/colourful-text";

const Logo = ({
	color = "0,0,0",
	size = "text-2xl md:text-3xl",
}: {
	color?: string;
	size?: string;
}) => {
	return (
		<div className="py-4">
			<h2 data-aos="fade-right">
				<Link
					className={`flex items-center space-x-2 uppercase ${size} font-bold hover:text-primary transition-all`}
					href="/"
				>
					<Heart className="text-secondary" size={32} />
					<span>
						Cardio <ColourfulText color={color} text={"Track"} />
					</span>
				</Link>
			</h2>
		</div>
	);
};

export default Logo;
