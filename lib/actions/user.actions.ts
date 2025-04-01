"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";

// Register user
export const createUser = async (user: CreateUserParams) => {
	try {
		await connectToDatabase();

		const newUser = await User.create(user);

		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		handleError(error);
	}
};

// Get user details

export const getUserInfo = async (clerkId: string) => {
	try {
		await connectToDatabase();

		if (!clerkId)
			return {
				status: 400,
				message: "Oops! ClerkID not found.",
			};

		const user = await User.findOne({ clerkId });

		if (!user)
			return {
				status: 400,
				message: "Oops! User not found.",
			};

		return { status: 200, user: JSON.parse(JSON.stringify(user)) };
	} catch (error: any) {
		handleError(error);
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Couldn't get user! Try again later.",
		};
	}
};
