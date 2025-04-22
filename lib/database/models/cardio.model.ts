import { Document, Schema, model, models, Types } from "mongoose";

// Define the TypeScript interface for the Cardio document
interface ICardio extends Document {
	user: Types.ObjectId;
	type: string;
	duration: string;
	distance?: string;
	caloriesBurned?: string;
	heartRate?: string;
	intensity: string;
	additionalNotes?: string;
	jumpingCount?: string;
	unit?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

// Define Mongoose Schema with Type Safety
const CardioSchema = new Schema<ICardio>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		type: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
		distance: {
			type: String,
		},
		caloriesBurned: {
			type: String,
		},
		unit: {
			type: String,
		},
		heartRate: {
			type: String,
		},
		jumpingCount: {
			type: String,
		},
		intensity: {
			type: String,
			required: true,
		},
		additionalNotes: {
			type: String,
		},
	},
	{ timestamps: true }
);

// Create and export the Cardio model with Type Safety
const Cardio = models.Cardio || model<ICardio>("Cardio", CardioSchema);

export default Cardio;
