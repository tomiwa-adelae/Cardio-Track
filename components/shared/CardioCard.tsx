import { Inknut_Antiqua } from "next/font/google";
import Image from "next/image";
const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const CardioCard = ({
	title,
	icon,
	details,
}: {
	title: string;
	icon: string;
	details: string;
}) => {
	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8 flex md:flex-col lg:flex-row items-start justify-start gap-4">
			<Image
				src={icon}
				alt={`${title} icon`}
				width={1000}
				height={1000}
				className="w-20 h-20"
			/>
			<div className="space-y-1 md:text-center lg:text-left">
				<h4 className="text-lg font-medium">
					<span className={`${inknut.className}`}>{details}</span>
				</h4>
				<p className="text-base text-gray-700">{title}</p>
			</div>
		</div>
	);
};

export default CardioCard;
