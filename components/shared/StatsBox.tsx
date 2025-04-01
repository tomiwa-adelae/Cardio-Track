import Image from "next/image";
import { Inknut_Antiqua } from "next/font/google";
const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const StatsBox = ({
	icon,
	title,
	description,
	number,
}: {
	icon: string;
	title: string;
	description: string;
	number: string | number;
}) => {
	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8 flex md:flex-col lg:flex-row items-center justify-start gap-4">
			<Image
				src={icon}
				alt={`${title} icon`}
				width={1000}
				height={1000}
				className="w-20 h-20"
			/>
			<div className="space-y-1 md:text-center lg:text-left">
				<h4 className="text-3xl font-medium">
					<span className={`${inknut.className}`}>{number}/</span>
					<span className="text-base">{title}</span>
				</h4>
				<p className="text-base text-gray-700">{description}</p>
			</div>
		</div>
	);
};

export default StatsBox;
