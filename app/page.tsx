// import Logo from "@/components/shared/Logo";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const page = () => {
// 	return (
// 		<div
// 			style={{
// 				backgroundImage: `url(/assets/images/landing-image.jpg)`,
// 			}}
// 			className="bg-no-repeat bg-center bg-cover relative text-white"
// 		>
// 			<div>
// 				<div className="container relative z-50 min-h-screen h-screen flex items-center justify-between flex-col">
// 					<Logo />
// 					<div className="flex flex-1 flex-col items-center text-center justify-center">
// 						<h1 className="font-semibold uppercase text-3xl md:text-4xl ">
// 							Track Your Cardio. Monitor Your Progress.{" "}
// 							<span className="text-primary">Stay Healthy</span>
// 						</h1>
// 						<p className="text-base font-medium">
// 							A simple and effective way to log, analyze, and
// 							improve your cardio workouts.
// 						</p>
// 						<Button
// 							size={"lg"}
// 							className="rounded-full mt-10"
// 							variant={"secondary"}
// 							asChild
// 						>
// 							<Link href="/sign-up">Get Started now</Link>
// 						</Button>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="absolute inset-0 bg-black/50 z-[-1]" />
// 		</div>
// 	);
// };

// export default page;

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

const page = () => {
	return (
		<div
			style={{
				backgroundImage: `url(/assets/images/landing-image.jpg)`,
			}}
			className={`flex items-center justify-center bg-no-repeat bg-center bg-cover relative text-white`}
		>
			<div className={`container z-50`}>
				<div className="flex flex-col items-start justify-between h-screen">
					<Logo />
					<div className="flex-1 py-16 flex flex-col md:items-center justify-center md:text-center">
						<h1 className="text-3xl lg:text-4xl uppercase font-bold">
							Track Your Cardio. Monitor Your Progress.{" "}
							<span className="text-primary">Stay Healthy</span>
						</h1>
						<p className="text-base lg:text-lg text-gray-100 mb-6 mt-2">
							A simple and effective way to log, analyze, and
							improve your cardio workouts.
						</p>
						<Button
							asChild
							size={"lg"}
							variant={"secondary"}
							className="rounded-full"
						>
							<Link href="/sign-up">Get started now</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default page;
