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
}: {
	title: string;
	limit?: number;
}) {
	const displayedWorkouts = limit ? invoices.slice(0, limit) : invoices;

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
					{displayedWorkouts.map((invoice: any, index: number) => (
						<TableRow key={index}>
							<TableCell className="font-medium">
								{invoice.date}
							</TableCell>
							<TableCell>{invoice.workoutType}</TableCell>
							<TableCell>{invoice.duration}</TableCell>
							<TableCell>{invoice.distance}</TableCell>
							<TableCell>{invoice.calories}</TableCell>
							<TableCell className="text-right capitalize">
								{invoice.intensity}
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
