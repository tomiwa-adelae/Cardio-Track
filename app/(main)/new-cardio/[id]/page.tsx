import CardioActions from "@/components/CardioActions";
import SectionHeader from "@/components/shared/SectionHeader";
import SummaryCardio from "@/components/shared/SummaryCardio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCardioDetails } from "@/lib/actions/cardio.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

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
				description={"Date & Time: March 31, 2025, 10:15 AM"}
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
