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

export function ProfileSettingsForm({
	picture,
	firstName,
	lastName,
	email,
	phoneNumber,
	gender,
	userId,
}: {
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	phoneNumber: string;
	gender: string;
	userId: string;
}) {
	const [success, setSuccess] = useState(false);

	const form = useForm<z.infer<typeof ProfileSettingsFormSchema>>({
		resolver: zodResolver(ProfileSettingsFormSchema),
		defaultValues: {
			firstName: firstName || "",
			lastName: lastName || "",
			email: email || "",
			phoneNumber: phoneNumber || "",
			gender: gender || "",
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
			<Image
				src={picture}
				alt={`${firstName} ${lastName}'s profile picture`}
				width={1000}
				height={1000}
				className="rounded-full object-cover h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60"
			/>
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
		</div>
	);
}
