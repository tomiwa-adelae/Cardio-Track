import { NewCardioForm } from "@/components/forms/NewCardioForm";
import SectionHeader from "@/components/shared/SectionHeader";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import React from "react";

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
