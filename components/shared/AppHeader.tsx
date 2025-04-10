"use client";
import Image from "next/image";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar"; // 👈 Import

const AppHeader = ({ user }: any) => {
	const router = useRouter();
	const { signOut } = useClerk();
	const pathname = usePathname();
	const { isMobile, setOpenMobile } = useSidebar();

	return (
		<div className="container">
			<div className="flex flex-1 flex-col overflow-x-hidden">
				<Logo />
				<div className="mt-8 flex flex-col gap-4">
					{navLinks.map((link, idx) => {
						const isActive =
							pathname === link.href ||
							pathname.startsWith(`${link.href}/`);
						return (
							<Link
								key={idx}
								href={link.href}
								className={`group flex items-center justify-start gap-2 group/sidebar py-2
									${isActive ? "text-primary" : "text-neutral-700"} hover:text-primary
                                    `}
								onClick={() => {
									if (isMobile) setOpenMobile(false); // 👈 Close sidebar on mobile
								}}
							>
								<Image
									src={link.icon}
									alt={link.label}
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<span className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium">
									{link.label}
								</span>
							</Link>
						);
					})}
					<div
						className={cn(
							"group flex items-center justify-start gap-2  group/sidebar py-2"
						)}
						onClick={async () => {
							if (isMobile) setOpenMobile(false);
							await signOut();
							router.push("/sign-in");
						}}
					>
						<Image
							src={"/assets/icons/logout.svg"}
							alt={`Logout icon`}
							width={1000}
							height={1000}
							className="w-5 h-5"
						/>

						<span
							className={cn(
								"text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium group-hover:text-secondary cursor-pointer"
							)}
						>
							Logout
						</span>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0">
				<div
					className={cn(
						"group flex items-center justify-start gap-2  group/sidebar py-2"
					)}
				>
					<Image
						src={user?.picture}
						alt={`${user?.firstName} ${user?.lastName}' picture`}
						width={1000}
						height={1000}
						className="w-14 h-14 rounded-full object-cover"
					/>

					<span
						className={cn(
							"text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium group-hover:text-primary"
						)}
					>
						{user?.firstName} {user?.lastName}
					</span>
				</div>
			</div>
		</div>
	);
};

export default AppHeader;
