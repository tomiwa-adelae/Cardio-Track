import {
	getAverageHeartRate,
	getTotalCaloriesBurned,
	getTotalDistanceCovered,
} from "@/lib/utils";
import StatsBox from "./StatsBox";

const Stats = ({ cardios }: any) => {
	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<StatsBox
				icon={"/assets/icons/dumbbell.svg"}
				title={"sessions"}
				description={"Total workouts completed"}
				number={cardios?.length}
			/>
			<StatsBox
				icon={"/assets/icons/fire.svg"}
				title={"kcal"}
				description={"Total calories burned"}
				number={getTotalCaloriesBurned(cardios)}
			/>
			<StatsBox
				icon={"/assets/icons/running.svg"}
				title={"km"}
				description={"Total distance covered"}
				number={getTotalDistanceCovered(cardios)}
			/>
			<StatsBox
				icon={"/assets/icons/heart.svg"}
				title={"BPM"}
				description={"Average heart rate"}
				number={getAverageHeartRate(cardios)}
			/>
		</div>
	);
};

export default Stats;
