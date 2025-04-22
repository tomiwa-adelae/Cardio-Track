import { formatTimestamp, formatWithCommas } from "@/lib/utils";
import CardioCard from "./CardioCard";

const SummaryCardio = ({ cardio }: { cardio: any }) => {
	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<CardioCard
				animation={require("@/public/assets/animations/calendar.json")}
				title={"Date & Time"}
				details={`${formatTimestamp(cardio?.createdAt)}`}
			/>
			<CardioCard
				animation={
					cardio.type === "Running"
						? require("@/public/assets/animations/running.json")
						: cardio.type === "Walking"
						? require("@/public/assets/animations/walking.json")
						: cardio.type === "Cycling"
						? require("@/public/assets/animations/cycling.json")
						: cardio.type === "Jumping rope"
						? require("@/public/assets/animations/jumping.json")
						: cardio.type === "Treadmill"
						? require("@/public/assets/animations/treadmill.json")
						: require("@/public/assets/animations/workout.json")
				}
				title={"Workout type"}
				details={`${cardio.type} ${
					cardio.type === "Jumping rope"
						? `(${formatWithCommas(cardio.jumpingCount)})`
						: ""
				}`}
			/>
			<CardioCard
				animation={require("@/public/assets/animations/duration.json")}
				title={"Duration"}
				details={`${cardio.duration} minutes`}
			/>
			<CardioCard
				animation={require("@/public/assets/animations/heartrate.json")}
				title={"Average Heart Rate"}
				details={`${formatWithCommas(cardio.heartRate)} BPM`}
			/>
			<CardioCard
				animation={require("@/public/assets/animations/fire.json")}
				title={"Calories Burned"}
				details={`${formatWithCommas(cardio.caloriesBurned)} kcal`}
			/>
			{cardio?.additionalNotes?.length !== 0 && (
				<CardioCard
					animation={require("@/public/assets/animations/note.json")}
					title={"Notes"}
					details={`${
						cardio?.additionalNotes === undefined
							? "No notes"
							: cardio?.additionalNotes
					}`}
				/>
			)}
		</div>
	);
};

export default SummaryCardio;
