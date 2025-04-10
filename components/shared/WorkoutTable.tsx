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
import { formatDate } from "@/lib/utils";
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
							<TableCell>{cardio.duration} minutes</TableCell>
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
			</Table>
			{limit !== 0 && cardios.length >= 10 && (
				<div className="my-8">
					<PaginationSection />
				</div>
			)}
		</div>
	);
}
