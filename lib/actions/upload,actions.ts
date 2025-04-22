"use server";
import { v2 as cloudinary } from "cloudinary";
import { handleError } from "../utils";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (image: any) => {
	try {
		if (
			image.startsWith("data:application/pdf") ||
			image.startsWith("data:image/jpeg") ||
			image.startsWith("data:image/png") ||
			image.startsWith("data:image/jpg") ||
			image.startsWith("data:image/gif") ||
			image.startsWith("data:image/webp")
		) {
			const result = await cloudinary.uploader.upload(image, {
				folder: "cardiotrack",
			});

			return { url: result.secure_url, id: result.public_id };
		} else {
			const result = await cloudinary.uploader.upload(image, {
				folder: "cardiotrack",
				resource_type: "raw",
			});

			return { url: result.secure_url, id: result.public_id };
		}
	} catch (error: any) {
		handleError(error);
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! Couldn't upload the image! Try again later.",
		};
	}
};
