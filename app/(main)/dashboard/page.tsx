import NewUserBox from "@/components/NewUserBox";
import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCardios } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard – Cardio Track | Your Fitness At a Glance",
	description:
		"Access your personalized cardio dashboard. View total workouts, average heart rate, calories burned, and track progress with smart insights.",
	keywords:
		"fitness dashboard, cardio progress, workout summary, heart rate chart, calories burned",
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
			{cardios?.data.length === 0 ? (
				<NewUserBox />
			) : (
				<>
					<SectionHeader
						title={`Welcome back, ${user?.user?.firstName}.`}
						description={
							"Your heart health journey is on track. Keep pushing!"
						}
					/>
					<Stats cardios={cardios.data} />
					<Separator className="my-8" />
					<WorkoutTable
						cardios={cardios.data}
						title="Recent workout table"
						limit={5}
					/>
					<Separator className="my-8" />
					<Button className="rounded-full" size={"lg"} asChild>
						<Link href="/new-cardio">+ Log new cardio sesion</Link>
					</Button>
				</>
			)}
		</div>
	);
};

export default page;
