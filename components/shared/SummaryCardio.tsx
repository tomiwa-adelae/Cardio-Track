import CardioCard from "./CardioCard";

const SummaryCardio = ({ cardio }: { cardio: any }) => {
	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<CardioCard
				icon={"/assets/icons/calendar.svg"}
				title={"Date & Time"}
				details="March 31, 2025, 10:15 AM"
			/>
			<CardioCard
				icon={
					cardio.type === "Running"
						? "/assets/icons/running.svg"
						: cardio.type === "Walking"
						? "/assets/icons/walking.svg"
						: cardio.type === "Cycling"
						? "/assets/icons/cycling.svg"
						: cardio.type === "Jump Rope"
						? "/assets/icons/jumping.svg"
						: cardio.type === "Treadmill"
						? "/assets/icons/treadmill.svg"
						: ""
				}
				title={"Workout type"}
				details={`${cardio.type}`}
			/>
			<CardioCard
				icon={"/assets/icons/hour-glass.svg"}
				title={"Duration"}
				details={`${cardio.duration} minutes`}
			/>
			<CardioCard
				icon={"/assets/icons/heart.svg"}
				title={"Average Heart Rate"}
				details={`${cardio.heartRate} BPM`}
			/>
			<CardioCard
				icon={"/assets/icons/fire.svg"}
				title={"Calories Burned"}
				details={`${cardio.caloriesBurned} kcal`}
			/>
			<CardioCard
				icon={"/assets/icons/reports.svg"}
				title={"Notes"}
				details={`${cardio.additionalNotes}`}
			/>
		</div>
	);
};

export default SummaryCardio;
