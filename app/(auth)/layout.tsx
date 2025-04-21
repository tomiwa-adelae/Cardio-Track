import { authVideo } from "@/constants";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	if (user?.status === 200) redirect("/dashboard");

	return (
		<div className="relative min-h-screen">
			<div>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
				>
					<source src={authVideo} type="video/mp4" />
				</video>
				<div className={`grid container max-w-4xl`}>
					<div className="z-50 text-white flex items-center justify-center">
						{children}
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default AuthLayout;
