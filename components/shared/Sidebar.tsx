"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export function LeftSidebar({ children }: any) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	return (
		<div
			className={cn(
				"mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
				"h-screen"
			)}
		>
			<Sidebar open={open} setOpen={setOpen} animate={false}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						<Logo />
						<div className="mt-8 flex flex-col gap-4">
							{navLinks.map((link, idx) => {
								const isActive =
									pathname === link.href ||
									pathname.startsWith(`${link.href}/`);
								console.log(isActive);
								return (
									<SidebarLink
										key={idx}
										link={link}
										className={
											isActive ? "text-primary" : ""
										}
									/>
								);
							})}
						</div>
					</div>
					<div>
						{/* <SidebarLink
							link={{
								label: "Manu Arora",
								href: "#",
								icon: (
									<Image
										src="https://assets.aceternity.com/manu.png"
										className="h-7 w-7 shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/> */}
					</div>
				</SidebarBody>
			</Sidebar>
			<div
				style={{
					backgroundImage: `url(/assets/images/bg.png)`,
				}}
				className="overflow-y-auto  bg-no-repeat bg-left bg-cover w-full h-full"
			>
				<div className="container py-4">{children}</div>
			</div>
		</div>
	);
}
