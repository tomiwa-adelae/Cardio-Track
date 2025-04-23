// app/api/reminders/daily/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import Cardio from "@/lib/database/models/cardio.model";
import { sendReminderMail } from "@/lib/mailer";

export async function GET() {
	await connectToDatabase();

	const users = await User.find({});
	const today = new Date();
	const start = new Date(today.setHours(0, 0, 0, 0));
	const end = new Date(today.setHours(23, 59, 59, 999));

	for (const user of users) {
		const session = await Cardio.findOne({
			user: user._id,
			createdAt: { $gte: start, $lte: end },
		});

		if (!session) {
			await sendReminderMail(user.email, user.firstName);
		}
	}

	return NextResponse.json({ message: "Reminder job done" });
}
