import CardioCard from "./CardioCard";

const SummaryCardio = () => {
	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<CardioCard
				icon={"/assets/icons/calendar.svg"}
				title={"Date & Time"}
				details="March 31, 2025, 10:15 AM"
			/>
			<CardioCard
				icon={"/assets/icons/hour-glass.svg"}
				title={"Duration"}
				details="45 minutes"
			/>
			<CardioCard
				icon={"/assets/icons/heart.svg"}
				title={"Average Heart Rate"}
				details="135 BPM"
			/>
			<CardioCard
				icon={"/assets/icons/fire.svg"}
				title={"Calories Burned"}
				details="280 kcal"
			/>
			<CardioCard
				icon={"/assets/icons/reports.svg"}
				title={"Notes"}
				details="Felt great! Increased pace towards the end."
			/>
		</div>
	);
};

export default SummaryCardio;
