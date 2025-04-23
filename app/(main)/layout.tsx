import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import AppHeader from "@/components/shared/AppHeader";
import Logo from "@/components/shared/Logo";

import { getUserInfo } from "@/lib/actions/user.actions";

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId } = auth();

	if (!userId) {
		redirect("/sign-in");
	}

	let user = null;
	const maxWaitTime = 60 * 1000; // 1 minute
	const intervalTime = 5000; // 5 seconds
	let elapsedTime = 0;

	// Polling function to attempt getting the user info multiple times
	while (elapsedTime < maxWaitTime) {
		user = await getUserInfo(userId);

		if (user?.status === 200) {
			break; // Successfully got user info, exit the loop
		}

		// Wait for the interval time before trying again
		await new Promise((resolve) => setTimeout(resolve, intervalTime));
		elapsedTime += intervalTime;
	}

	if (!user || user?.status !== 200) {
		redirect("/not-authorized");
	}

	return (
		<SidebarProvider defaultOpen={true}>
			<Sidebar>
				<SidebarHeader />
				<SidebarContent>
					<AppHeader user={user.user} />
				</SidebarContent>
				<SidebarFooter />
			</Sidebar>
			<main
				style={{
					backgroundImage: `url(/assets/images/bg.png)`,
				}}
				className="bg-no-repeat bg-left bg-cover w-full h-full"
			>
				<div className="h-10 py-10 flex flex-row md:hidden  items-center justify-between bg-white dark:bg-neutral-800 w-full">
					<div className="container flex items-center justify-between z-20 w-full">
						<Logo />
						<SidebarTrigger />
					</div>
				</div>
				<div className="container py-8">{children}</div>
			</main>
		</SidebarProvider>
	);
}
