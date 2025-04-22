"use server";

import Mailjet from "node-mailjet";
import { handleError } from "./utils";
import { generateReminderEmail } from "@/templates";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const sendReminderMail = async (email: string, name: string) => {
	try {
		// **Send Confirmation Email to renter**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: email,
							Name: name,
						},
					],
					Subject: `Cardio Reminder - Cardio Track`,
					TextPart: `Cardio Reminder - Cardio Track`,
					HTMLPart: generateReminderEmail(name),
				},
			],
		});
	} catch (error: any) {
		handleError(error);
	}
};
