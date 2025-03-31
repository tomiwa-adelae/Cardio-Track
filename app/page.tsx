import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import { SignedIn, UserButton } from "@clerk/nextjs";

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
					<div className="flex items-center justify-between w-full">
						<Logo />
						<div>
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>
					</div>
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
			<div className="absolute inset-0 bg-black/80" />
		</div>
	);
};

export default page;
