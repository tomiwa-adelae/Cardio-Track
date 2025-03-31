import { NewCardioForm } from "@/components/forms/NewCardioForm";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";

const page = () => {
	return (
		<div>
			<SectionHeader
				title={"Log a New Cardio Session"}
				description={
					"Track your progress and stay on top of your cardio goals!"
				}
			/>
			<NewCardioForm />
		</div>
	);
};

export default page;
