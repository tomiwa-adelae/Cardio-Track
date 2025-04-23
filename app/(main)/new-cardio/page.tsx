import type { Metadata } from "next";
import { auth } from "@clerk/nextjs";

import { NewCardioForm } from "@/components/forms/NewCardioForm";
import SectionHeader from "@/components/shared/SectionHeader";

import { getUserInfo } from "@/lib/actions/user.actions";

export const metadata: Metadata = {
	title: "New Cardio Session – Log Your Workout | Cardio Track",
	description:
		"Add a new cardio session including activity type, duration, distance, heart rate, and calories. Keep track of your fitness journey in real-time.",
	keywords:
		"log cardio session, add workout, new running session, cycling log, workout tracker form",
};

const page = async () => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	return (
		<div>
			<SectionHeader
				title={"Log a New Cardio Session"}
				description={
					"Track your progress and stay on top of your cardio goals!"
				}
			/>
			<NewCardioForm userId={user?.user?._id} />
		</div>
	);
};

export default page;
