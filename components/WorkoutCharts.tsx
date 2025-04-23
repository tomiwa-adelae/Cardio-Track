"use client";
import {
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ComposedChart,
	Area,
} from "recharts";
import {
	Calendar,
	ArrowUp,
	ArrowDown,
	ChevronDown,
	Filter,
	Download,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";

export function WorkoutCharts({ workoutData }: { workoutData: any[] }) {
	const [dateRange, setDateRange] = useState("month");
	const [selectedMetrics, setSelectedMetrics] = useState([
		"heartRate",
		"distance",
	]);
	const [showFilters, setShowFilters] = useState(false);

	// Process workout data for visualization
	const processedData = useMemo(() => {
		if (!workoutData || workoutData.length === 0) return [];

		// Sort workouts by date
		const sortedWorkouts = [...workoutData].sort(
			(a, b) =>
				new Date(a.createdAt).getTime() -
				new Date(b.createdAt).getTime()
		);

		// Group by month for monthly view
		const monthlyData: any = {};
		sortedWorkouts.forEach((workout) => {
			const date = new Date(workout.createdAt);
			const monthKey = date.toLocaleString("default", { month: "short" });

			if (!monthlyData[monthKey]) {
				monthlyData[monthKey] = {
					date: monthKey,
					workouts: 0,
					heartRate: 0,
					distance: 0,
					duration: 0,
					caloriesBurned: 0,
				};
			}

			monthlyData[monthKey].workouts += 1;
			monthlyData[monthKey].heartRate += parseInt(workout.heartRate || 0);
			monthlyData[monthKey].distance += parseInt(workout.distance || 0);
			monthlyData[monthKey].duration += parseInt(workout.duration || 0);
			monthlyData[monthKey].caloriesBurned += parseInt(
				workout.caloriesBurned || 0
			);
		});

		// Calculate averages for each month
		Object.keys(monthlyData).forEach((month) => {
			const data = monthlyData[month];
			data.heartRate = Math.round(data.heartRate / data.workouts);
			data.distance = +(data.distance / data.workouts).toFixed(1);
			data.duration = Math.round(data.duration / data.workouts);
			data.caloriesBurned = Math.round(
				data.caloriesBurned / data.workouts
			);
		});

		// Convert to array for Recharts
		return Object.values(monthlyData);
	}, [workoutData]);

	// Process weekly data
	const weeklyData = useMemo(() => {
		if (!workoutData || workoutData.length === 0) return [];

		// For simplicity, we'll just take the last 5 workouts for "weekly" view
		// In a real application, you would properly group by week
		const recentWorkouts = [...workoutData]
			.sort(
				(a, b) =>
					new Date(b.createdAt).getTime() -
					new Date(a.createdAt).getTime()
			)
			.slice(0, 5)
			.reverse();

		return recentWorkouts.map((workout, index) => {
			return {
				date: `Workout ${index + 1}`,
				heartRate: parseInt(workout.heartRate || 0),
				distance: parseInt(workout.distance || 0),
				duration: parseInt(workout.duration || 0),
				calories: parseInt(workout.caloriesBurned || 0),
				intensity: workout.intensity,
				type: workout.type,
			};
		});
	}, [workoutData]);

	// Performance metrics for comparison - calculate as current week vs previous week
	const performanceMetrics = useMemo(() => {
		if (!workoutData || workoutData.length === 0) return [];

		// Sort workouts by date (newest first)
		const sortedWorkouts = [...workoutData].sort(
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

		// Calculate averages for current week
		const currentWeekStats = {
			heartRate: calculateAverage(currentWeekWorkouts, "heartRate"),
			distance: calculateAverage(currentWeekWorkouts, "distance"),
			duration: calculateAverage(currentWeekWorkouts, "duration"),
			calories: calculateAverage(currentWeekWorkouts, "caloriesBurned"),
		};

		// Calculate averages for previous week
		const previousWeekStats = {
			heartRate: calculateAverage(previousWeekWorkouts, "heartRate"),
			distance: calculateAverage(previousWeekWorkouts, "distance"),
			duration: calculateAverage(previousWeekWorkouts, "duration"),
			calories: calculateAverage(previousWeekWorkouts, "caloriesBurned"),
		};

		// Helper function to calculate average of a specific field in workouts
		function calculateAverage(workouts: any, field: any) {
			if (workouts.length === 0) return 0;

			const sum = workouts.reduce((total: any, workout: any) => {
				return total + parseInt(workout[field] || 0);
			}, 0);

			return Math.round(sum / workouts.length);
		}

		return [
			{
				name: "Heart Rate",
				current: currentWeekStats.heartRate,
				previous: previousWeekStats.heartRate,
				unit: "BPM",
			},
			{
				name: "Distance",
				current: currentWeekStats.distance,
				previous: previousWeekStats.distance,
				unit: "km",
			},
			{
				name: "Duration",
				current: currentWeekStats.duration,
				previous: previousWeekStats.duration,
				unit: "min",
			},
			{
				name: "Calories",
				current: currentWeekStats.calories,
				previous: previousWeekStats.calories,
				unit: "kcal",
			},
		];
	}, [workoutData]);

	// Data for chart visualization
	const displayData = dateRange === "week" ? weeklyData : processedData;

	// Metric options for selection
	const metricOptions = [
		{ id: "heartRate", label: "Heart Rate", color: "#ff5252", unit: "BPM" },
		{ id: "distance", label: "Distance", color: "#4caf50", unit: "km" },
		{ id: "duration", label: "Duration", color: "#2196f3", unit: "min" },
		{ id: "calories", label: "Calories", color: "#ff9800", unit: "kcal" },
		{ id: "intensity", label: "Intensity", color: "#9c27b0", unit: "" },
	];

	// Toggle metric selection
	const toggleMetric = (metricId: any) => {
		if (selectedMetrics.includes(metricId)) {
			setSelectedMetrics(selectedMetrics.filter((id) => id !== metricId));
		} else {
			setSelectedMetrics([...selectedMetrics, metricId]);
		}
	};

	return (
		<div>
			<h3 className="font-medium text-lg mb-4 uppercase">Timeline</h3>
			<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg p-8">
				<div className="flex flex-wrap items-center justify-between mb-4">
					<div className="flex items-center">
						<Button
							variant="outline"
							onClick={() => setShowFilters(!showFilters)}
						>
							<span className="mr-2">Metrics</span>
							<ChevronDown className="h-4 w-4" />
						</Button>
					</div>
					<div className="flex items-center text-muted-foreground text-sm font-medium">
						<Calendar className="h-4 w-4 mr-2" />
						<span>
							{dateRange === "week"
								? "Recent Workouts"
								: "Monthly Summary"}
						</span>
					</div>
					<div className="flex overflow-hidden">
						<Button
							variant={dateRange === "week" ? "default" : "ghost"}
							onClick={() => setDateRange("week")}
						>
							Recent
						</Button>
						<Button
							variant={
								dateRange === "month" ? "default" : "ghost"
							}
							onClick={() => setDateRange("month")}
						>
							Monthly
						</Button>
					</div>
				</div>

				{/* Metric Selection */}
				{showFilters && (
					<div className="flex flex-wrap gap-2 mb-4 p-4 bg-gray-50 rounded-lg">
						{metricOptions.map((metric) => (
							<Button
								variant="outline"
								key={metric.id}
								className={`rounded-full ${
									selectedMetrics.includes(metric.id)
										? "bg-primary/10 text-blue-700 border border-blue-300"
										: "bg-white text-muted-foreground border hover:bg-gray-100"
								}`}
								onClick={() => toggleMetric(metric.id)}
							>
								{metric.label}
							</Button>
						))}
					</div>
				)}

				{/* Main Progress Chart */}
				{displayData.length > 0 ? (
					<div className="h-80">
						<ResponsiveContainer width="100%" height="100%">
							<ComposedChart data={displayData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="date" />
								<YAxis yAxisId="left" orientation="left" />
								<YAxis yAxisId="right" orientation="right" />
								<Tooltip />
								<Legend />

								{selectedMetrics.includes("heartRate") && (
									<Line
										yAxisId="right"
										type="monotone"
										dataKey="heartRate"
										name="Heart Rate (BPM)"
										stroke="#ff5252"
										activeDot={{ r: 8 }}
									/>
								)}

								{selectedMetrics.includes("distance") && (
									<Bar
										yAxisId="left"
										dataKey="distance"
										name="Distance (km)"
										fill="#4caf50"
										barSize={20}
									/>
								)}

								{selectedMetrics.includes("duration") && (
									<Line
										yAxisId="left"
										type="monotone"
										dataKey="duration"
										name="Duration (min)"
										stroke="#2196f3"
									/>
								)}

								{selectedMetrics.includes("calories") && (
									<Area
										yAxisId="left"
										type="monotone"
										dataKey="calories"
										name="Calories"
										fill="#ff9800"
										fillOpacity={0.3}
										stroke="#ff9800"
									/>
								)}
							</ComposedChart>
						</ResponsiveContainer>
					</div>
				) : (
					<div className="flex items-center justify-center h-80 bg-gray-50 rounded-lg">
						<p className="text-muted-foreground">
							No workout data available
						</p>
					</div>
				)}

				{/* Performance Metrics Summary */}
				{performanceMetrics.length > 0 && (
					<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
						{performanceMetrics.map((metric) => (
							<div
								key={metric.name}
								className="bg-gray-50 p-4 rounded-lg"
							>
								<p className="text-sm text-muted-foreground">
									{metric.name}
								</p>
								<div className="flex flex-col md:flex-row  items-start md:items-end gap-2 mt-1">
									<p className="text-lg lg:text-xl font-medium">
										{metric.current} {metric.unit}
									</p>
									<p
										className={`text-sm flex items-center ${
											metric.current > metric.previous
												? "text-green-500"
												: metric.current <
												  metric.previous
												? "text-red-500"
												: "text-gray-500"
										}`}
									>
										{metric.current > metric.previous ? (
											<ArrowUp className="h-3 w-3 mr-1" />
										) : metric.current < metric.previous ? (
											<ArrowDown className="h-3 w-3 mr-1" />
										) : null}
										{Math.abs(
											metric.current - metric.previous
										)}
									</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
