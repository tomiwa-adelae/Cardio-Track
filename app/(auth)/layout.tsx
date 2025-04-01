import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	const { userId } = auth();

	const user = await getUserInfo(userId!);

	if (user?.status === 200) redirect("/dashboard");

	return <div>{children}</div>;
};

export default AuthLayout;
