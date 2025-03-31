import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const NewCardioFormSchema = z.object({
	workoutType: z.string().min(2, {
		message: "Workout type is required.",
	}),
	duration: z.string().min(2, {
		message: "Workout type is required.",
	}),
	distance: z.string().min(2, {
		message: "Workout type is required.",
	}),
	caloriesBurned: z.string().min(2, {
		message: "Workout type is required.",
	}),
	heartRate: z.string().min(2, {
		message: "Workout type is required.",
	}),
	intensity: z.enum(["Low", "Moderate", "High"], {
		required_error: "You need to select a intensity type.",
	}),
	additionalNotes: z.string().optional(),
});

export const ProfileSettingsFormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name is required.",
	}),
	lastName: z.string().min(2, {
		message: "Last name is required.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phoneNumber: z
		.string()
		.regex(/^(\+?\d{10,15})$/, { message: "Enter a valid phone number." })
		.refine(isValidPhoneNumber, {
			message: "Invalid phone number",
		}),
	gender: z.string().min(2, {
		message: "Gender must be either Male or Female.",
	}),
});
