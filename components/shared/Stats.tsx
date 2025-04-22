// "use client";
// import {
// 	getAverageHeartRate,
// 	getTotalCaloriesBurned,
// 	getTotalDistanceCovered,
// 	getTotalJumpingCount,
// } from "@/lib/utils";
// import StatsBox from "./StatsBox";
// import { useMemo } from "react";

// const Stats = ({ cardios }: any) => {
// 	// Performance metrics for comparison - calculate as current week vs previous week
// 	const performanceMetrics = useMemo(() => {
// 		if (!cardios || cardios.length === 0) return [];

// 		// Sort workouts by date (newest first)
// 		const sortedWorkouts = [...cardios].sort(
// 			(a, b) =>
// 				new Date(b.createdAt).getTime() -
// 				new Date(a.createdAt).getTime()
// 		);

// 		// Get current date and calculate date 7 days ago and 14 days ago
// 		const now = new Date();
// 		const oneWeekAgo = new Date(now);
// 		oneWeekAgo.setDate(now.getDate() - 7);
// 		const twoWeeksAgo = new Date(now);
// 		twoWeeksAgo.setDate(now.getDate() - 14);

// 		// Filter workouts for current week and previous week
// 		const currentWeekWorkouts = sortedWorkouts.filter(
// 			(workout) => new Date(workout.createdAt) >= oneWeekAgo
// 		);

// 		const previousWeekWorkouts = sortedWorkouts.filter(
// 			(workout) =>
// 				new Date(workout.createdAt) >= twoWeeksAgo &&
// 				new Date(workout.createdAt) < oneWeekAgo
// 		);

// 		// Calculate averages for current week
// 		const currentWeekStats = {
// 			heartRate: calculateAverage(currentWeekWorkouts, "heartRate"),
// 			distance: calculateAverage(currentWeekWorkouts, "distance"),
// 			duration: calculateAverage(currentWeekWorkouts, "duration"),
// 			calories: calculateAverage(currentWeekWorkouts, "caloriesBurned"),
// 		};

// 		// Calculate averages for previous week
// 		const previousWeekStats = {
// 			heartRate: calculateAverage(previousWeekWorkouts, "heartRate"),
// 			distance: calculateAverage(previousWeekWorkouts, "distance"),
// 			duration: calculateAverage(previousWeekWorkouts, "duration"),
// 			calories: calculateAverage(previousWeekWorkouts, "caloriesBurned"),
// 		};

// 		// Helper function to calculate average of a specific field in workouts
// 		function calculateAverage(workouts: any, field: any) {
// 			if (workouts.length === 0) return 0;

// 			const sum = workouts.reduce((total: any, workout: any) => {
// 				return total + parseInt(workout[field] || 0);
// 			}, 0);

// 			return Math.round(sum / workouts.length);
// 		}

// 		return [
// 			{
// 				name: "Heart Rate",
// 				current: currentWeekStats.heartRate,
// 				previous: previousWeekStats.heartRate,
// 				unit: "BPM",
// 			},
// 			{
// 				name: "Distance",
// 				current: currentWeekStats.distance,
// 				previous: previousWeekStats.distance,
// 				unit: "km",
// 			},
// 			{
// 				name: "Duration",
// 				current: currentWeekStats.duration,
// 				previous: previousWeekStats.duration,
// 				unit: "min",
// 			},
// 			{
// 				name: "Calories",
// 				current: currentWeekStats.calories,
// 				previous: previousWeekStats.calories,
// 				unit: "kcal",
// 			},
// 		];
// 	}, [cardios]);

// 	return (
// 		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
// 			<StatsBox
// 				animation={require("@/public/assets/animations/workout.json")}
// 				title={"sessions"}
// 				description={"Total workouts completed"}
// 				number={cardios?.length}
// 			/>
// 			<StatsBox
// 				animation={require("@/public/assets/animations/fire.json")}
// 				title={"kcal"}
// 				description={"Total calories burned"}
// 				number={
// 					getTotalCaloriesBurned(cardios) === "NaN"
// 						? 0
// 						: getTotalCaloriesBurned(cardios)
// 				}
// 			/>
// 			<StatsBox
// 				animation={require("@/public/assets/animations/heartrate.json")}
// 				title={"BPM"}
// 				description={"Average heart rate"}
// 				number={
// 					getAverageHeartRate(cardios) === "NaN"
// 						? 0
// 						: getAverageHeartRate(cardios)
// 				}
// 			/>
// 			<StatsBox
// 				animation={require("@/public/assets/animations/running.json")}
// 				title={"km"}
// 				description={"Total distance covered"}
// 				number={
// 					getTotalDistanceCovered(cardios) === "NaN"
// 						? 0
// 						: getTotalDistanceCovered(cardios)
// 				}
// 			/>
// 			<StatsBox
// 				animation={require("@/public/assets/animations/jumping.json")}
// 				title={"km"}
// 				description={"Total Jumping count"}
// 				number={
// 					getTotalJumpingCount(cardios) === "NaN"
// 						? 0
// 						: getTotalJumpingCount(cardios)
// 				}
// 			/>
// 		</div>
// 	);
// };

// export default Stats;

"use client";
import {
	getAverageHeartRate,
	getTotalCaloriesBurned,
	getTotalDistanceCovered,
	getTotalJumpingCount,
} from "@/lib/utils";
import StatsBox from "./StatsBox";
import { useMemo } from "react";

const Stats = ({ cardios }: any) => {
	// Calculate percentage changes compared to previous week
	const percentageChanges = useMemo(() => {
		if (!cardios || cardios.length === 0) return {};

		// Sort workouts by date (newest first)
		const sortedWorkouts = [...cardios].sort(
			(a, b) =>
				new Date(b.createdAt).getTime() -
				new Date(a.createdAt).getTime()
		);

		// Get current date and calculate date 7 days ago and 14 days ago
		const now = new Date();
		const oneWeekAgo = new Date(now);
		oneWeekAgo.setDate(now.getDate() - 7);
		const twoWeeksAgo = new Date(now);
		twoWeeksAgo.setDate(now.getDate() - 14);

		// Filter workouts for current week and previous week
		const currentWeekWorkouts = sortedWorkouts.filter(
			(workout) => new Date(workout.createdAt) >= oneWeekAgo
		);

		const previousWeekWorkouts = sortedWorkouts.filter(
			(workout) =>
				new Date(workout.createdAt) >= twoWeeksAgo &&
				new Date(workout.createdAt) < oneWeekAgo
		);

		// Calculate metrics for current and previous week
		const currentWeekMetrics = {
			sessions: currentWeekWorkouts.length,
			calories: calculateSum(currentWeekWorkouts, "caloriesBurned"),
			heartRate: calculateAverage(currentWeekWorkouts, "heartRate"),
			distance: calculateSum(currentWeekWorkouts, "distance"),
			jumpingCount: calculateSum(currentWeekWorkouts, "jumpingCount"),
		};

		const previousWeekMetrics = {
			sessions: previousWeekWorkouts.length,
			calories: calculateSum(previousWeekWorkouts, "caloriesBurned"),
			heartRate: calculateAverage(previousWeekWorkouts, "heartRate"),
			distance: calculateSum(previousWeekWorkouts, "distance"),
			jumpingCount: calculateSum(previousWeekWorkouts, "jumpingCount"),
		};

		// Calculate percentage changes
		return {
			sessions: calculatePercentageChange(
				currentWeekMetrics.sessions,
				previousWeekMetrics.sessions
			),
			calories: calculatePercentageChange(
				currentWeekMetrics.calories,
				previousWeekMetrics.calories
			),
			heartRate: calculatePercentageChange(
				currentWeekMetrics.heartRate,
				previousWeekMetrics.heartRate
			),
			distance: calculatePercentageChange(
				currentWeekMetrics.distance,
				previousWeekMetrics.distance
			),
			jumpingCount: calculatePercentageChange(
				currentWeekMetrics.jumpingCount,
				previousWeekMetrics.jumpingCount
			),
		};
	}, [cardios]);

	// Helper function to calculate average of a specific field in workouts
	function calculateAverage(workouts: any, field: any) {
		if (workouts.length === 0) return 0;

		const sum = workouts.reduce((total: any, workout: any) => {
			return total + parseInt(workout[field] || 0);
		}, 0);

		return Math.round(sum / workouts.length);
	}

	// Helper function to calculate sum of a specific field in workouts
	function calculateSum(workouts: any, field: any) {
		if (workouts.length === 0) return 0;

		return workouts.reduce((total: any, workout: any) => {
			return total + parseInt(workout[field] || 0);
		}, 0);
	}

	// Helper function to calculate percentage change
	function calculatePercentageChange(current: number, previous: number) {
		if (previous === 0) {
			return current > 0 ? 100 : 0; // If previous was 0, show 100% increase if current > 0
		}

		const change = ((current - previous) / previous) * 100;
		return Math.round(change);
	}

	return (
		<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<StatsBox
				animation={require("@/public/assets/animations/workout.json")}
				title={"sessions"}
				description={"Total workouts completed"}
				number={cardios?.length}
				percentageChange={percentageChanges.sessions}
			/>
			<StatsBox
				animation={require("@/public/assets/animations/fire.json")}
				title={"kcal"}
				description={"Total calories burned"}
				number={
					getTotalCaloriesBurned(cardios) === "NaN"
						? 0
						: getTotalCaloriesBurned(cardios)
				}
				percentageChange={percentageChanges.calories}
			/>
			<StatsBox
				animation={require("@/public/assets/animations/heartrate.json")}
				title={"BPM"}
				description={"Average heart rate"}
				number={
					getAverageHeartRate(cardios) === "NaN"
						? 0
						: getAverageHeartRate(cardios)
				}
				percentageChange={percentageChanges.heartRate}
			/>
			<StatsBox
				animation={require("@/public/assets/animations/running.json")}
				title={"km"}
				description={"Total distance covered"}
				number={
					getTotalDistanceCovered(cardios) === "NaN"
						? 0
						: getTotalDistanceCovered(cardios)
				}
				percentageChange={percentageChanges.distance}
			/>
			<StatsBox
				animation={require("@/public/assets/animations/jumping.json")}
				title={"jumps"}
				description={"Total Jumping count"}
				number={
					getTotalJumpingCount(cardios) === "NaN"
						? 0
						: getTotalJumpingCount(cardios)
				}
				percentageChange={percentageChanges.jumpingCount}
			/>
		</div>
	);
};

export default Stats;
