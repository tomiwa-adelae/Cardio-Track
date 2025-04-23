import type { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { WorkoutCharts } from "@/components/WorkoutCharts";
import PersonalBest from "@/components/PersonalBest";
import { Separator } from "@/components/ui/separator";

import { getCardios } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";

export const metadata: Metadata = {
	title: "View Progress – Cardio Track | Visualize Your Fitness Trends",
	description:
		"Analyze your heart rate, calories burned, and workout intensity over time. Use interactive charts to monitor your fitness journey.",
	keywords:
		"workout trends, progress tracker, cardio analytics, heart rate graph, fitness insights",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	const cardios = await getCardios({
		userId: user?.user?._id,
	});

	if (cardios.status === 400) redirect("/not-found");
	return (
		<div>
			<SectionHeader
				title={"View Progress"}
				description={
					"Analyze your performance and stay on track with your fitness journey!"
				}
			/>
			<Stats cardios={cardios.data} />
			<Separator className="my-8" />
			<WorkoutCharts workoutData={cardios.data} />
			<Separator className="my-8" />
			<PersonalBest workoutData={cardios.data} />
			<Separator className="my-8" />
			<WorkoutTable cardios={cardios.data} title="Workout history" />
			{/* <Separator className="my-8" />
			<Button size={"lg"} className="rounded-full">
				Export reports
			</Button>*/}
		</div>
	);
};

export default page;
