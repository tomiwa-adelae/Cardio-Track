import { ProfileSettingsForm } from "@/components/forms/ProfileSettingsForm";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			<SectionHeader
				title={"Your Profile & Settings"}
				description={
					"Manage your account details, update health preferences, and customize your experience."
				}
			/>
			<ProfileSettingsForm />
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
				<div className="flex items-center justify-start gap-4 mt-4">
					<Button size={"lg"}>Export workout data</Button>
					<Button variant={"secondary"} size={"lg"}>
						Delete account
					</Button>
				</div>
			</div>
		</div>
	);
};

export default page;
