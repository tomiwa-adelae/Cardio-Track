import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { WorkoutCharts } from "@/components/WorkoutCharts";
import { CARDIO_LIMIT } from "@/constants";
import { getCardios } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "View Progress – Cardio Track | Visualize Your Fitness Trends",
	description:
		"Analyze your heart rate, calories burned, and workout intensity over time. Use interactive charts to monitor your fitness journey.",
	keywords:
		"workout trends, progress tracker, cardio analytics, heart rate graph, fitness insights",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const { userId } = auth();

	const page = Number(searchParams?.page) || 1;
	const query = (searchParams?.query as string) || "";

	const user = await getUserInfo(userId!);

	const cardios = await getCardios({
		page,
		query,
		limit: CARDIO_LIMIT,
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
			<WorkoutCharts cardios={cardios.data} />
			<WorkoutTable cardios={cardios.data} title="Workout history" />
			<Button size={"lg"} className="mt-10">
				Export reports
			</Button>
		</div>
	);
};

export default page;
