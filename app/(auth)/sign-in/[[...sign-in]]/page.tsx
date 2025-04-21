import Logo from "@/components/shared/Logo";
import { SignIn } from "@clerk/nextjs";

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
		<div className="flex flex-col items-center justify-between h-screen container">
			<Logo color="255,255,255" />
			<div className="flex-1 flex flex-col items-start justify-center">
				<h2
					className={`uppercase text-lg font-semibold mb-2 text-primary`}
				>
					Welcome back!
				</h2>
				<p className="text-base">
					Log in to access your cardio records, track your progress,
					and stay on top of your fitness goals.
				</p>
				<div className="mt-8 w-full">
					<SignIn />
				</div>
			</div>
		</div>
	);
};

export default page;
