import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatDate, formatDuration } from "@/lib/utils";
import Link from "next/link";

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
						<TableHead>Type</TableHead>
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
								<Link
									className="hover:underline text-primary transition-all"
									href={`/new-cardio/${cardio?._id}`}
								>
									{formatDate(cardio.createdAt)}
								</Link>
							</TableCell>
							<TableCell>{cardio.type}</TableCell>
							<TableCell>
								{formatDuration(cardio.duration)}
							</TableCell>
							<TableCell>
								{!cardio.distance ? 0 : cardio.distance} km
							</TableCell>
							<TableCell>{cardio.caloriesBurned} kcal</TableCell>
							<TableCell className="text-right capitalize">
								{cardio.intensity}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				{displayedWorkouts.length === 0 && (
					<p className="italic text-base text-center py-6 text-muted-foreground">
						No workout data
					</p>
				)}
			</Table>
		</div>
	);
}
