import { ProfileSettingsForm } from "@/components/forms/ProfileSettingsForm";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile Settings – Cardio Track | Manage Your Fitness Preferences",
	description:
		"Update your personal information, manage units, adjust privacy settings, and control your cardio tracking experience.",
	keywords:
		"update profile, cardio preferences, fitness app settings, change workout info, account settings",
};

const page = async () => {
	const { userId } = auth();
	const user = await getUserInfo(userId!);
	return (
		<div>
			<SectionHeader
				title={"Your Profile & Settings"}
				description={
					"Manage your account details, update health preferences, and customize your experience."
				}
			/>
			<ProfileSettingsForm
				picture={user?.user?.picture}
				firstName={user?.user?.firstName}
				lastName={user?.user?.lastName}
				email={user?.user?.email}
				phoneNumber={user?.user?.phoneNumber}
				gender={user?.user?.gender}
				weight={user?.user?.weight}
				height={user?.user?.height}
				bio={user?.user?.bio}
				dob={user?.user?.dob}
				userId={user?.user?._id}
			/>
			<Separator className="my-8" />
			<div>
				<h3 className="font-medium text-lg mb-4 uppercase">
					Data & Privacy
				</h3>
				<p className="text-base">
					Take control of your personal data and privacy settings.
					Here, you can manage your workout history, export your
					cardio session data, update privacy preferences, and request
					account deletion if needed. Your data security is our
					priority!
				</p>
				<div className="flex flex-wrap items-center justify-start gap-4 mt-4">
					<Button className="rounded-full" size={"lg"}>
						Export workout data
					</Button>
					<Button
						className="rounded-full"
						variant={"secondary"}
						size={"lg"}
					>
						Delete account
					</Button>
				</div>
			</div>
		</div>
	);
};

export default page;
