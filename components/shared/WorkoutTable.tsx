import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { PaginationSection } from "../Pagination";

const invoices = [
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
	{
		date: "25 Mar 2025",
		workoutType: "Running",
		duration: "45 minutes",
		distance: "6.2km",
		calories: "680kcal",
		intensity: "high",
	},
];

export function WorkoutTable({
	title,
	limit,
	cardios,
}: {
	title: string;
	limit?: number;
	cardios: any;
}) {
	const displayedWorkouts = limit ? cardios.slice(0, limit) : cardios;

	return (
		<div>
			<h3 className="font-medium text-lg mb-4 uppercase">{title}</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Date</TableHead>
						<TableHead>Workout type</TableHead>
						<TableHead>Duration</TableHead>
						<TableHead>Distance</TableHead>
						<TableHead>Calories</TableHead>
						<TableHead className="text-right">Intensity</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{displayedWorkouts.map((cardio: any, index: number) => (
						<TableRow key={index}>
							<TableCell className="font-medium">
								{cardio.date}
							</TableCell>
							<TableCell>{cardio.type}</TableCell>
							<TableCell>{cardio.duration} minutes</TableCell>
							<TableCell>{cardio.distance} km</TableCell>
							<TableCell>{cardio.caloriesBurned} kcal</TableCell>
							<TableCell className="text-right capitalize">
								{cardio.intensity}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{limit !== 0 && (
				<div className="my-8">
					<PaginationSection />
				</div>
			)}
		</div>
	);
}
