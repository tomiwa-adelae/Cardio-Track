import SectionHeader from "@/components/shared/SectionHeader";
import SummaryCardio from "@/components/shared/SummaryCardio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCardioDetails } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Success Cardio Session – Log Your Workout | Cardio Track",
	description:
		"Add a new cardio session including activity type, duration, distance, heart rate, and calories. Keep track of your fitness journey in real-time.",
	keywords:
		"log cardio session, add workout, new running session, cycling log, workout tracker form",
};

const page = async ({ params }: { params: { id: string } }) => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	const cardio = await getCardioDetails({
		userId: user?.user._id,
		cardioId: params.id,
	});

	if (cardio?.status !== 200) redirect("/not-authorized");

	return (
		<div>
			<SectionHeader
				title={"Cardio Session Logged Successfully!"}
				description={
					"Your cardio session has been saved successfully. Keep up the great work and stay consistent on your fitness journey!"
				}
			/>
			<SummaryCardio cardio={cardio?.cardio} />
			<Separator className="my-8" />
			<div className="flex flex-wrap items-center justify-start gap-4">
				<Button asChild size={"lg"}>
					<Link href="/progress">View Progress</Link>
				</Button>
				<Button variant={"green"} asChild size={"lg"}>
					<Link href="/new-cardio">Log Another Session</Link>
				</Button>
				<Button variant={"outline"} asChild size={"lg"}>
					<Link href="/dashboard">Return to Dashboard</Link>
				</Button>
			</div>
		</div>
	);
};

export default page;
