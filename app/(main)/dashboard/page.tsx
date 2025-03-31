import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";
import { WorkoutTable } from "@/components/shared/WorkoutTable";
import { Button } from "@/components/ui/button";
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
			<Stats />
			<WorkoutTable title="Recent workout table" limit={3} />
			<Button size={"lg"} className="mt-10" asChild>
				<Link href="/new-cardio">+ Log new cardio sesion</Link>
			</Button>
		</div>
	);
};

export default page;
