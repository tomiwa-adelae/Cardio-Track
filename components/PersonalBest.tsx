"use client";

import { formatDate, formatDuration } from "@/lib/utils";
import { Clock, Flame, Route, Trophy } from "lucide-react";
import React, { useState, useEffect } from "react";

type Workout = {
	distance?: string;
	duration?: string;
	caloriesBurned?: string;
	createdAt: string;
};

type PersonalBestMetric = {
	value: number;
	date: Date | null;
};

const PersonalBestBox = ({
	title,
	value,
	unit,
	date,
	icon: Icon,
	color,
}: {
	title: string;
	value: string;
	unit?: string;
	date: Date | null;
	icon: React.ElementType;
	color: string;
}) => (
	<div
		className={`flex justify-between items-center bg-${color}-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-8`}
	>
		<div>
			<p className="text-sm text-muted-foreground">{title}</p>
			<h4 className="text-xl sm:text-2xl font-semibold my-2">
				{value} {unit}
			</h4>
			<p className="text-sm text-muted-foreground">{formatDate(date)}</p>
		</div>
		<Icon
			className={`h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 text-${color}-500`}
		/>
	</div>
);

const PersonalBest = ({ workoutData }: { workoutData: Workout[] }) => {
	const [longestDistance, setLongestDistance] = useState<PersonalBestMetric>({
		value: 0,
		date: null,
	});
	const [fastestPace, setFastestPace] = useState<PersonalBestMetric>({
		value: 0,
		date: null,
	});
	const [mostCalories, setMostCalories] = useState<PersonalBestMetric>({
		value: 0,
		date: null,
	});
	const [longestWorkout, setLongestWorkout] = useState<PersonalBestMetric>({
		value: 0,
		date: null,
	});

	useEffect(() => {
		if (!workoutData?.length) return;

		const parse = (val?: string) => (val ? parseFloat(val) : 0);

		const getMax = (key: keyof Workout) => {
			const valid = workoutData.filter((w) => w[key]);
			return valid.reduce((max, curr) =>
				parse(curr[key]) > parse(max[key]) ? curr : max
			);
		};

		// Longest Distance
		const maxDistance = getMax("distance");
		setLongestDistance({
			value: parse(maxDistance.distance),
			date: new Date(maxDistance.createdAt),
		});

		// Most Calories Burned
		const maxCalories = getMax("caloriesBurned");
		setMostCalories({
			value: parse(maxCalories.caloriesBurned),
			date: new Date(maxCalories.createdAt),
		});

		// Longest Workout
		const maxDuration = getMax("duration");
		setLongestWorkout({
			value: parse(maxDuration.duration),
			date: new Date(maxDuration.createdAt),
		});

		// Fastest Pace = duration / distance (smaller is better)
		const validPace = workoutData
			.filter((w) => parse(w.duration) > 0 && parse(w.distance) > 0)
			.map((w) => ({
				...w,
				pace: parse(w.duration) / parse(w.distance),
			}));

		if (validPace.length > 0) {
			const fastest = validPace.reduce((min, curr) =>
				curr.pace < min.pace ? curr : min
			);

			setFastestPace({
				value: fastest.pace,
				date: new Date(fastest.createdAt),
			});
		}
	}, [workoutData]);

	const formatPace = (pace: number) => {
		if (!pace) return "0:00 min/km";
		const min = Math.floor(pace);
		const sec = Math.round((pace - min) * 60);
		return `${min}:${sec.toString().padStart(2, "0")} min/km`;
	};

	return (
		<div>
			<h3 className="font-medium text-lg mb-4 uppercase">
				Personal Best
			</h3>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
				<PersonalBestBox
					title="Fastest Pace"
					value={formatPace(fastestPace.value)}
					date={fastestPace.date}
					icon={Clock}
					color="blue"
				/>
				<PersonalBestBox
					title="Longest Distance"
					value={longestDistance.value.toString()}
					unit="km"
					date={longestDistance.date}
					icon={Route}
					color="green"
				/>

				<PersonalBestBox
					title="Most Calories Burned"
					value={mostCalories.value.toString()}
					unit="cal"
					date={mostCalories.date}
					icon={Flame}
					color="orange"
				/>
				<PersonalBestBox
					title="Longest Workout"
					value={formatDuration(longestWorkout.value)}
					date={longestWorkout.date}
					icon={Trophy}
					color={"purple"}
				/>
			</div>
		</div>
	);
};

export default PersonalBest;
