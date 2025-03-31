"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewCardioFormSchema } from "@/lib/validations";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { workoutIntensities, workoutType } from "@/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";

export function NewCardioForm() {
	const form = useForm<z.infer<typeof NewCardioFormSchema>>({
		resolver: zodResolver(NewCardioFormSchema),
		defaultValues: {},
	});

	function onSubmit(data: z.infer<typeof NewCardioFormSchema>) {}

	return (
		<div className="mt-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="workoutType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Workout type</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a workout type" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{workoutType.map((type, index) => (
											<SelectItem
												value={type}
												key={index}
											>
												{type}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="duration"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Workout duration (minutes)
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Example: 45"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="distance"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Distance covered (km)</FormLabel>
								<FormControl>
									<Input
										placeholder="Example: 5.2"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="caloriesBurned"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Calories burned (kcal)</FormLabel>
								<FormControl>
									<Input
										placeholder="Example: 600"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="heartRate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Average heart rate (BPM)</FormLabel>
								<FormControl>
									<Input
										placeholder="Example: 80"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="intensity"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>Workout intensity</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex flex-wrap space-x-1"
									>
										{workoutIntensities.map(
											(intensity, index) => (
												<FormItem
													key={index}
													className="flex items-center space-x-3 space-y-0"
												>
													<FormControl>
														<RadioGroupItem
															value={intensity}
														/>
													</FormControl>
													<FormLabel className="font-normal text-base">
														{intensity}
													</FormLabel>
												</FormItem>
											)
										)}
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="additionalNotes"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Additional notes</FormLabel>
								<FormControl>
									<Textarea
										className="resize-none"
										placeholder="Example: 80"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="rounded-full" size={"lg"} type="submit">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
