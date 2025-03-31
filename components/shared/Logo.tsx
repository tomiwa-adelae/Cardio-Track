import { Inknut_Antiqua } from "next/font/google";
const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const Logo = () => {
	return (
		<div className="w-full">
			<h2
				className={`${inknut.className} uppercase text-2xl font-semibold py-4`}
			>
				Cardio Track
			</h2>
		</div>
	);
};

export default Logo;
