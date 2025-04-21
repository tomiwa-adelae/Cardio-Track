import Logo from "@/components/shared/Logo";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login – Cardio Track | Access Your Dashboard",
	description:
		"Secure login to your Cardio Track account. View your cardio progress, add new workouts, and track your health metrics in real-time.",
	keywords:
		"cardio track login, access cardio dashboard, workout tracker login, heart rate log in",
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
							Welcome back!
						</h2>
						<p className="text-base">
							Log in to access your cardio records, track your
							progress, and stay on top of your fitness goals.
						</p>
						<div className="mt-8 w-full">
							<SignIn />
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
			{/* <SignIn /> */}
		</div>
	);
};

export default page;
