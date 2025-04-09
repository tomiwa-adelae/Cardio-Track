import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId } = auth();

	if (!userId) {
		redirect("/sign-in");
	}

	const user = await getUserInfo(userId!);

	if (user?.status !== 200) redirect("/not-authorized");

	return (
		<div>
			<LeftSidebar user={user?.user} children={children} />
		</div>
	);
}
