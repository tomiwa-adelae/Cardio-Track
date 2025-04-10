"use client";

import { Flame, TrendingUp } from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import { useMemo } from "react";

export function WorkoutCharts({ cardios }: { cardios: any }) {
	const intensityData = useMemo(() => {
		const intensityCount = cardios.reduce((acc: any, session: any) => {
			acc[session.intensity] = (acc[session.intensity] || 0) + 1;
			return acc;
		}, {});

		return Object.entries(intensityCount).map(([intensity, count]) => ({
			intensity,
			count,
			fill:
				intensity === "High"
					? "#E7000B"
					: intensity === "Moderate"
					? "#ffa500"
					: "#0282E9",
		}));
	}, [cardios]);

	const heartRateData = cardios.map((session: any) => ({
		session: new Date(session.createdAt).toLocaleTimeString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}),
		heartRate: Number(session.heartRate),
	}));

	const caloriesData = cardios.map((session: any) => ({
		session: new Date(session.createdAt).toLocaleString([], {
			year: "numeric",
			month: "short",
			day: "numeric",
		}),
		caloriesBurned: Number(session.caloriesBurned),
	}));
	const chartConfig = {
		heartRate: {
			label: "Heart Rate (BPM)",
			color: "hsl(var(--chart-1))",
		},
		caloriesBurned: {
			label: "Calories Burned",
			color: "hsl(var(--chart-2))",
		},
	} satisfies ChartConfig;

	return (
		<div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
			<div className="mb-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg py-4">
				<CardHeader>
					<CardTitle>Calories Burned</CardTitle>
					<CardDescription>Recent Cardio Sessions</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<BarChart accessibilityLayer data={caloriesData}>
							<CartesianGrid
								vertical={false}
								strokeDasharray="3 3"
							/>
							<XAxis
								dataKey="session"
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								angle={-45}
								textAnchor="end"
							/>
							<YAxis tickLine={false} axisLine={false} />
							<ChartTooltip
								cursor={false}
								content={
									<ChartTooltipContent indicator="dashed" />
								}
							/>
							<Bar
								dataKey="caloriesBurned"
								fill="var(--color-caloriesBurned)"
								radius={4}
							/>
						</BarChart>
					</ChartContainer>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="flex gap-2 font-medium leading-none">
						Calories burned per session{" "}
						<Flame className="h-4 w-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Tracking calorie expenditure over time
					</div>
				</CardFooter>
			</div>
			<div className="mb-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg py-4">
				<CardHeader>
					<CardTitle>Heart Rate Trends</CardTitle>
					<CardDescription>Recent Cardio Sessions</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<BarChart accessibilityLayer data={heartRateData}>
							<CartesianGrid
								vertical={false}
								strokeDasharray="3 3"
							/>
							<XAxis
								dataKey="session"
								tickLine={false}
								tickMargin={10}
								axisLine={false}
							/>
							<YAxis
								domain={[60, 100]}
								tickLine={false}
								axisLine={false}
							/>
							<ChartTooltip
								cursor={false}
								content={
									<ChartTooltipContent indicator="dashed" />
								}
							/>
							<Bar
								dataKey="heartRate"
								fill="var(--color-heartRate)"
								radius={4}
							/>
						</BarChart>
					</ChartContainer>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="flex gap-2 font-medium leading-none">
						Trending steady <TrendingUp className="h-4 w-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Monitoring heart rate across cardio sessions
					</div>
				</CardFooter>
			</div>
			<div className="mb-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg py-4">
				<CardHeader>
					<CardTitle>Intensity Distribution</CardTitle>
					<CardDescription>Workout Session Breakdown</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer
						config={{ intensity: { label: "Intensity" } }}
						className="mx-auto aspect-square max-h-[250px]"
					>
						<PieChart>
							<ChartTooltip
								content={
									<ChartTooltipContent nameKey="intensity" />
								}
							/>
							<Pie
								data={intensityData}
								dataKey="count"
								outerRadius={80}
								label
							>
								<LabelList
									dataKey="intensity"
									position="inside"
									fill="#fff"
									fontSize={12}
								/>
							</Pie>
						</PieChart>
					</ChartContainer>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="flex gap-2 font-medium leading-none">
						Trending steady <TrendingUp className="h-4 w-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Monitoring intensity rate across cardio sessions
					</div>
				</CardFooter>
			</div>
		</div>
	);
}
