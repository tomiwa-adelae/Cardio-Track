import Logo from "@/components/shared/Logo";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign Up – Cardio Track | Create Your Free Fitness Account",
	description:
		"Join Cardio Track and start monitoring your fitness. Sign up to log cardio sessions, track heart rate, calories, and improve your wellness.",
	keywords:
		"sign up cardio app, fitness tracker registration, create workout account, log cardio sessions",
};

const page = () => {
	return (
		<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-5 h-screen">
			<div
				style={{
					backgroundImage: `url(/assets/images/bg.png)`,
				}}
				className="md:col-span-1 lg:col-span-2 bg-no-repeat bg-left bg-cover"
			>
				<div className="flex flex-col items-start justify-between h-screen container">
					<Logo />
					<div className="flex-1 flex flex-col items-start justify-center">
						<h2
							className={`uppercase text-lg font-semibold mb-2 text-primary`}
						>
							Create your account
						</h2>
						<p className="text-base">
							Create an account to easily log your cardio
							sessions, track progress, and stay motivated on your
							fitness journey
						</p>
						<div className="mt-8 w-full">
							<SignUp />
						</div>
					</div>
				</div>
			</div>
			<Image
				alt={"An image of a man on a threadmill"}
				src={"/assets/images/auth-image.jpg"}
				width={1000}
				height={1000}
				className="hidden md:block w-full h-full object-cover md:col-span-1 lg:col-span-3"
			/>
			{/* <SignUp /> */}
		</div>
	);
};

export default page;
