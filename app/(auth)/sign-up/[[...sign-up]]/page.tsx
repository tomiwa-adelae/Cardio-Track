import Logo from "@/components/shared/Logo";
import { authVideo } from "@/constants";
import { SignUp } from "@clerk/nextjs";

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
		<div className="flex flex-col items-center justify-between container">
			<Logo color="255,255,255" />
			<div className="flex-1 flex flex-col items-start justify-center py-16">
				<h2
					className={`uppercase text-lg font-semibold mb-2 text-primary`}
				>
					Create your account
				</h2>
				<p className="text-base">
					Create an account to easily log your cardio sessions, track
					progress, and stay motivated on your fitness journey
				</p>
				<div className="mt-8 w-full">
					<SignUp />
				</div>
			</div>
		</div>
	);
};

export default page;
