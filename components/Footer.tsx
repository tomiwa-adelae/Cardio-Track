import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="bg-[#1F2937] py-8 text-center text-white font-medium uppercase text-xs">
			<div className="container">
				<Link href="/" className="hover:text-secondary transition-all">
					&copy; {year} Cardio Track. All rights reserved.
				</Link>
			</div>
		</div>
	);
};

export default Footer;
