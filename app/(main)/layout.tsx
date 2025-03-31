import { LeftSidebar } from "@/components/shared/Sidebar";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="overflow-hidden">
			<LeftSidebar children={children} />
		</div>
	);
}
