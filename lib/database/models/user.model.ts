import { Document, Schema, model, models } from "mongoose";

// Define the TypeScript interface for the User document
interface IUser extends Document {
	clerkId: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber?: string;
	picture?: string;
	pictureId?: string;
	bio?: string;
	weight?: string;
	height?: string;
	dob?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

// Define Mongoose Schema with Type Safety
const UserSchema = new Schema<IUser>(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
		},
		picture: {
			type: String,
		},
		pictureId: {
			type: String,
		},
		bio: {
			type: String,
		},
		dob: {
			type: String,
		},
		weight: {
			type: String,
		},
		height: {
			type: String,
		},
	},
	{ timestamps: true } // Enables createdAt and updatedAt
);

// Create and export the User model with Type Safety
const User = models.User || model<IUser>("User", UserSchema);

export default User;
