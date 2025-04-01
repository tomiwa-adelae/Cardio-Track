"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

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
						<div
							className={cn(
								"group flex items-center justify-start gap-2  group/sidebar py-2"
							)}
							onClick={() => setOpen(!open)}
						>
							<Image
								src={"/assets/images/sample-img.jpeg"}
								alt={"Profile picture"}
								width={1000}
								height={1000}
								className="w-14 h-14 rounded-full object-cover"
							/>

							<motion.span
								// animate={{
								// 	display: animate
								// 		? open
								// 			? "inline-block"
								// 			: "none"
								// 		: "inline-block",
								// 	opacity: animate ? (open ? 1 : 0) : 1,
								// }}
								className={cn(
									"text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium group-hover:text-primary"
								)}
							>
								Tomiwa Adelae
							</motion.span>
						</div>
					</div>
				</SidebarBody>
			</Sidebar>
			<div
				style={{
					backgroundImage: `url(/assets/images/bg.png)`,
				}}
				className="overflow-y-auto  bg-no-repeat bg-left bg-cover w-full h-full"
			>
				<div className="container py-8">{children}</div>
			</div>
		</div>
	);
}
