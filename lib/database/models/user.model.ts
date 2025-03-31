import { Document, Schema, model, models } from "mongoose";

// Define Mongoose Schema with Type Safety
const UserSchema = new Schema(
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
	},
	{ timestamps: true } // Enables createdAt and updatedAt
);

// Create and export the User model with Type Safety
const User = models.User || model("User", UserSchema);

export default User;
