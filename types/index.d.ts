declare interface CreateUserParams {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
}

declare interface CreateCardioSessionParams {
	userId: string;
	details: {
		type: string;
		duration: string;
		distance?: string;
		caloriesBurned: string;
		heartRate: string;
		intensity: string;
		additionalNotes?: string;
	};
}
