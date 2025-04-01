import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CARDIO_LIMIT } from "@/constants";
import { getCardios } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

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
				title={"Welcome back, Steve."}
				description={
					"Your heart health journey is on track. Keep pushing!"
				}
			/>
			<Stats />
			<Separator className="my-8" />
			<WorkoutTable
				cardios={cardios.data}
				title="Recent workout table"
				limit={3}
			/>
			<Button size={"lg"} className="mt-10" asChild>
				<Link href="/new-cardio">+ Log new cardio sesion</Link>
			</Button>
		</div>
	);
};

export default page;
