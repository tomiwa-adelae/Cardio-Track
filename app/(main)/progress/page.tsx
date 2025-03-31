import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { WorkoutCharts } from "@/components/WorkoutCharts";

const page = () => {
	return (
		<div>
			<SectionHeader
				title={"View Progress"}
				description={
					"Analyze your performance and stay on track with your fitness journey!"
				}
			/>
			<Stats />
			<WorkoutCharts />
			<WorkoutTable title="Workout history" />
			<Button size={"lg"} className="mt-10">
				Export reports
			</Button>
		</div>
	);
};

export default page;
