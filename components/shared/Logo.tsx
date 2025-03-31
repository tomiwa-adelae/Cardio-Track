import { Inknut_Antiqua } from "next/font/google";
import Link from "next/link";
const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const Logo = () => {
	return (
		<div className="w-full">
			<h2
				className={`${inknut.className} uppercase text-2xl font-semibold py-4 hover:text-primary transition-all`}
			>
				<Link href="/">Cardio Track</Link>
			</h2>
		</div>
	);
};

export default Logo;
