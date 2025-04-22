declare interface CreateUserParams {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
}

declare interface GetCardios {
	userId: string;
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
		unit?: string;
		jumpingCount?: string;
	};
}

declare interface SearchParamProps {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

declare interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

declare interface RemoveUrlQueryParams {
	params: string;
	keysToRemove: string[];
}
