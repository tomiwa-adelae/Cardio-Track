"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Cardio from "../database/models/cardio.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

// Create new cardio session
export const createCardioSession = async ({
	userId,
	details,
}: CreateCardioSessionParams) => {
	try {
		await connectToDatabase();

		if (!userId)
			return {
				status: 400,
				message: "Oops! UserID not found.",
			};

		const user = await User.findById(userId);

		if (!user)
			return {
				status: 400,
				message: "Oops! User not found.",
			};

		const cardio = await Cardio.create({ user: userId, ...details });

		if (!cardio)
			return {
				status: 400,
				message: `Oops! Cardio session was not created.`,
			};

		revalidatePath("/dashboard");
		revalidatePath("/progress");
		return {
			status: 200,
			cardio: JSON.parse(JSON.stringify(cardio)),
			message: `You have successfully created a cardio session - ${cardio._id}.`,
		};
	} catch (error: any) {
		handleError(error);
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Couldn't get user! Try again later.",
		};
	}
};

// Get the details for the cardio session
export const getCardioDetails = async ({
	userId,
	cardioId,
}: {
	userId: string;
	cardioId: string;
}) => {
	try {
		await connectToDatabase();

		if (!userId)
			return {
				status: 400,
				message: "Oops! UserID not found.",
			};

		if (!cardioId)
			return {
				status: 400,
				message: "Oops! CardioID not found.",
			};

		const user = await User.findById(userId);

		if (!user)
			return {
				status: 400,
				message: "Oops! User not found.",
			};

		const cardio = await Cardio.findById(cardioId);

		if (!cardio)
			return {
				status: 400,
				message: "Oops! Cardio not found.",
			};

		return {
			status: 200,
			cardio: JSON.parse(JSON.stringify(cardio)),
		};
	} catch (error: any) {
		handleError(error);
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Couldn't get user! Try again later.",
		};
	}
};
