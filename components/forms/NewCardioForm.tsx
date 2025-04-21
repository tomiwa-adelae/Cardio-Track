"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
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
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	newDashboardAnimations,
	workoutIntensities,
	workoutType,
} from "@/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";
import { createCardioSession } from "@/lib/actions/cardio.actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Clock, Flame, Heart, MapPin } from "lucide-react";

export function NewCardioForm({ userId }: { userId: string }) {
	const animationRef = useRef<LottieRefCurrentProps>(null);
	const router = useRouter();

	const [workoutType, setWorkoutType] = useState("");

	const form = useForm<z.infer<typeof NewCardioFormSchema>>({
		resolver: zodResolver(NewCardioFormSchema),
		defaultValues: {},
	});

	async function onSubmit(data: z.infer<typeof NewCardioFormSchema>) {
		try {
			const details = { ...data };

			const res = await createCardioSession({ details, userId });

			if (res?.status === 400)
				return toast({
					title: "Error!",
					description: res?.message,
					variant: "destructive",
				});

			toast({
				title: "Success!",
				description: res?.message,
			});

			router.push(`/new-cardio/${res.cardio?._id}?success=true`);
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	}

	const type = form.watch("type");

	return (
		<div className="mt-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div>
						<FormLabel>Workout type</FormLabel>
						<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4">
							{newDashboardAnimations.map((animation, index) => {
								const animationData = animation.animation;
								if (!animationData) return null; // skip if animation is invalid
								return (
									<div
										key={index}
										className={cn(
											"shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-8 mt-2 bg-white cursor-pointer",
											animation.name === workoutType &&
												"bg-primary text-white"
										)}
										onClick={() =>
											setWorkoutType(animation.name)
										}
									>
										<Lottie
											lottieRef={animationRef}
											animationData={animationData}
											className="h-16"
										/>
										<h4 className="text-base font-medium uppercase text-center mx-auto mt-4">
											{animation.name}
										</h4>
									</div>
								);
							})}
						</div>
					</div>
					{/* <FormField
						control={form.control}
						name="type"
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
					/> */}
					<FormField
						control={form.control}
						name="duration"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Workout duration (minutes)
								</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											type="number"
											placeholder="15"
											max={60}
											min={1}
											className="pl-10"
											{...field}
										/>
										<Clock className="text-muted-foreground absolute top-[50%] left-[1%] translate-x-[-1%] translate-y-[-50%] " />
									</div>
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
									<div className="relative flex items-center justify-center">
										<Input
											type="number"
											placeholder="5"
											max={1000}
											min={1}
											className="flex-1 pl-10"
											{...field}
										/>
										<MapPin className="text-muted-foreground absolute top-[50%] left-[1%] translate-x-[-1%] translate-y-[-50%] " />
										<Select>
											<SelectTrigger className="w-[100px]">
												<SelectValue placeholder="unit" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>
														Unit
													</SelectLabel>
													<SelectItem value="km">
														kilometers
													</SelectItem>
													<SelectItem value="m">
														meters
													</SelectItem>
													<SelectItem value="mil">
														miles
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* {["Running", "Walking", "Cycling"].includes(type) && (
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
					)} */}
					<FormField
						control={form.control}
						name="caloriesBurned"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Calories burned (kcal)</FormLabel>
								<FormControl>
									<div className="relative flex items-center justify-center">
										<Input
											type="number"
											placeholder="600"
											max={3000}
											min={1}
											className="pl-10"
											{...field}
										/>
										<Flame className="text-muted-foreground absolute top-[50%] left-[1%] translate-x-[-1%] translate-y-[-50%] " />
									</div>
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
									<div className="relative flex items-center justify-center">
										<Input
											type="number"
											placeholder="165"
											max={200}
											min={1}
											className="pl-10"
											{...field}
										/>
										<Heart className="text-muted-foreground absolute top-[50%] left-[1%] translate-x-[-1%] translate-y-[-50%] " />
									</div>
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
					<Button
						disabled={form.formState.isSubmitting}
						className="rounded-full"
						size={"lg"}
						type="submit"
					>
						{form.formState.isSubmitting
							? "Submitting..."
							: "Submit"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
