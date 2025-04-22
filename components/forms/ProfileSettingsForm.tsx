"use client";

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
import { ProfileSettingsFormSchema } from "@/lib/validations";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { genders } from "@/constants";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "@/hooks/use-toast";
import { updateUser } from "@/lib/actions/user.actions";
import { useState } from "react";
import Link from "next/link";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import { ImageModal } from "../shared/ImageModal";
import { Textarea } from "../ui/textarea";

export function ProfileSettingsForm({
	picture,
	firstName,
	lastName,
	email,
	phoneNumber,
	gender,
	weight,
	height,
	dob,
	bio,
	userId,
}: {
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	phoneNumber: string;
	gender: string;
	weight: string;
	height: string;
	dob: string;
	bio: string;
	userId: string;
}) {
	const [success, setSuccess] = useState(false);
	const [openImageModal, setOpenImageModal] = useState<boolean>(false);

	const form = useForm<z.infer<typeof ProfileSettingsFormSchema>>({
		resolver: zodResolver(ProfileSettingsFormSchema),
		defaultValues: {
			firstName: firstName || "",
			lastName: lastName || "",
			email: email || "",
			phoneNumber: phoneNumber || "",
			gender: gender || "",
			weight: weight || "",
			height: height || "",
			bio: bio || "",
			dob: dob || "",
		},
	});

	async function onSubmit(data: z.infer<typeof ProfileSettingsFormSchema>) {
		try {
			const details = { ...data };

			const res = await updateUser({ details, userId });

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
			setSuccess(true);
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	}

	return (
		<div className="mt-8">
			<div className="flex items-center justify-start gap-4">
				<Image
					src={picture}
					alt={`${firstName} ${lastName}'s profile picture`}
					width={1000}
					height={1000}
					className="rounded-full object-cover h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60"
				/>
				<Button
					size={"lg"}
					className="rounded-full"
					variant={"outline"}
					onClick={() => setOpenImageModal(true)}
				>
					<ImageIcon className="text-muted-foreground mr-2 w-5 h-5" />
					Change image
				</Button>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 mt-8"
				>
					<div className="grid-cols-1 md:grid-cols-2 grid gap-6">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="John" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										disabled
										type="email"
										placeholder="john@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<PhoneInput
										placeholder="Enter phone number"
										value={field.value}
										defaultCountry="NG"
										className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
										onChange={(phone) => {
											field.onChange(phone);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid-cols-1 md:grid-cols-2 grid gap-6">
						<FormField
							control={form.control}
							name="gender"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Gender</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
										}}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your gender" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{genders.map((gender, index) => (
												<SelectItem
													key={index}
													value={gender}
												>
													{gender}
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
							name="dob"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="mb-2.5">
										Date of Birth
									</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"pl-3 text-left text-base sm:text-sm capitalize font-normal h-14",
														!field.value &&
															"text-muted-foreground"
													)}
												>
													{field.value ? (
														format(
															new Date(
																field.value
															),
															"PPP"
														)
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={
													field.value
														? new Date(field.value)
														: undefined
												}
												onSelect={(date) => {
													if (date) {
														const isoDate =
															date.toISOString();
														field.onChange(isoDate);
													}
												}}
												disabled={(date) =>
													date > new Date() ||
													date <
														new Date("1900-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid-cols-1 md:grid-cols-2 grid gap-6">
						<FormField
							control={form.control}
							name="weight"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>Current weight</FormLabel>
									<FormControl>
										<Input
											type="number"
											max={2000}
											min={1}
											placeholder="Weight in kg"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="height"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>Current height</FormLabel>
									<FormControl>
										<Input
											type="number"
											max={400}
											min={20}
											placeholder="Height in cm"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="bio"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>About me / Bio</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Share a little about yourself and your fitness journey"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-wrap items-center justify-start gap-4">
						<Button
							variant={success ? "outline" : "default"}
							className="rounded-full"
							size={"lg"}
							type="submit"
							disabled={form.formState.isSubmitting}
						>
							{form.formState.isSubmitting
								? "Submitting..."
								: "Submit"}
						</Button>
						{success && (
							<Button
								asChild
								className="rounded-full"
								size={"lg"}
							>
								<Link href="/dashboard">
									Go back to dashboard
								</Link>
							</Button>
						)}
					</div>
				</form>
			</Form>
			{openImageModal && (
				<ImageModal
					open={openImageModal}
					closeModal={() => {
						setOpenImageModal(false);
					}}
					userId={userId}
				/>
			)}
		</div>
	);
}
