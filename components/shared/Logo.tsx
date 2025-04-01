import { Inknut_Antiqua } from "next/font/google";
import Link from "next/link";
const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const Logo = () => {
	return (
		<div className="w-full py-4">
			<h2>
				<Link
					className={`${inknut.className} uppercase text-2xl font-semibold hover:text-primary transition-all`}
					href="/"
				>
					Cardio Track
				</Link>
			</h2>
		</div>
	);
};

export default Logo;
