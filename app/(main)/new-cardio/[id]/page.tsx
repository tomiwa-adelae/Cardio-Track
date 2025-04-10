import CardioActions from "@/components/CardioActions";
import SectionHeader from "@/components/shared/SectionHeader";
import SummaryCardio from "@/components/shared/SummaryCardio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCardioDetails } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { formatTimestamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cardio Session | Cardio Track",
	description:
		"Add a new cardio session including activity type, duration, distance, heart rate, and calories. Keep track of your fitness journey in real-time.",
	keywords:
		"log cardio session, add workout, new running session, cycling log, workout tracker form",
};

const page = async ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { success?: string };
}) => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	const success = searchParams?.success;

	const cardio = await getCardioDetails({
		userId: user?.user._id,
		cardioId: params.id,
	});

	if (cardio?.status !== 200) redirect("/not-authorized");

	return (
		<div>
			<SectionHeader
				title={
					success
						? `Cardio Session Logged Successfully!`
						: "Cardio Session Details"
				}
				description={`Date & Time: ${formatTimestamp(
					cardio?.cardio.createdAt
				)}`}
			/>
			<SummaryCardio cardio={cardio?.cardio} />
			<Separator className="my-8" />
			<CardioActions
				cardioId={cardio?.cardio?._id}
				userId={cardio?.cardio.user}
				success={success}
			/>
		</div>
	);
};

export default page;
