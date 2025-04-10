import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
	console.log(error);
};

export function formatDate(dateString: string): string {
	const date = new Date(dateString);

	// Get the day, month and year
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	// Function to get the ordinal suffix
	const getOrdinalSuffix = (num: number): string => {
		const suffixes = ["th", "st", "nd", "rd"];
		const modulo100 = num % 100;
		const modulo10 = num % 10;
		const suffix =
			modulo10 <= 3 && modulo10 > 0 && modulo100 !== 11
				? suffixes[modulo10]
				: suffixes[0];
		return `${num}${suffix}`;
	};

	// Format the date
	return `${month} ${getOrdinalSuffix(day)}, ${year}`;
}

export function formatTimestamp(dateString: string) {
	const date = new Date(dateString);

	// Options for formatting
	const options: any = {
		year: "numeric",
		month: "short", // "Apr" instead of "April"
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true, // Ensures AM/PM format
	};

	return date.toLocaleString("en-US", options);
}
export function getTotalCaloriesBurned(data: any) {
	const total = data.reduce(
		(total: number, session: any) => total + Number(session.caloriesBurned),
		0
	);
	return total.toFixed(2); // Ensure two decimal places
}

// Utility function to format numbers with commas
export const formatWithCommas = (amount: number | string) => {
	const num =
		typeof amount === "string"
			? parseFloat(amount.replace(/,/g, ""))
			: amount;

	if (isNaN(num)) return "0.00";

	return num.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

export function getTotalDistanceCovered(data: any) {
	const total = data.reduce(
		(total: number, session: any) => total + Number(session.distance),
		0
	);
	return total.toFixed(2); // Ensure two decimal places
}

export function getAverageHeartRate(data: any) {
	if (data.length === 0) return "00.00"; // Handle empty data

	const totalHeartRate = data.reduce(
		(total: number, session: any) => total + Number(session.heartRate),
		0
	);
	return (totalHeartRate / data.length).toFixed(2); // Ensure two decimal places
}
