import SectionHeader from "@/components/shared/SectionHeader";
import StatsBox from "@/components/shared/StatsBox";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
import { stats } from "@/constants";
import Link from "next/link";

const page = () => {
	return (
		<div>
			<SectionHeader
				title={"Welcome back, Steve."}
				description={
					"Your heart health journey is on track. Keep pushing!"
				}
			/>
			<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
				{stats.map(({ icon, title, description, number }, index) => (
					<StatsBox
						key={index}
						icon={icon}
						title={title}
						description={description}
						number={number}
					/>
				))}
			</div>
			<WorkoutTable title="Recent workout table" />
			<Button size={"lg"} className="mt-10" asChild>
				<Link href="/new-cardio">+ Log new cardio sesion</Link>
			</Button>
		</div>
	);
};

export default page;
