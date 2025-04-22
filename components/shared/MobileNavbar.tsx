"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { links, navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ScrollArea } from "../ui/scroll-area";

export function MobileNavbar({ user }: { user: any }) {
	const router = useRouter();
	const { signOut } = useClerk();
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="hover:bg-transparent"
					size={"icon"}
				>
					<Image
						src={"/assets/icons/menu.svg"}
						alt={"Menu Icon"}
						width={1000}
						height={1000}
						className="w-[40px] invert h-[40px] md:w-[40px] md:h-[40px] "
					/>
				</Button>
			</SheetTrigger>
			<SheetContent className="h-screen" side={"left"}>
				<ScrollArea className="h-full">
					<Logo size={"text-xl"} />
					<nav className="flex flex-col gap-4 mt-4">
						{links
							.slice(0, 3)
							.map(({ label, slug, icon }, index) => {
								const isActive =
									pathname === slug ||
									pathname.startsWith(`${slug}/`);

								return (
									<SheetClose
										asChild
										key={index}
										className=""
									>
										<Link
											href={slug}
											className={`group flex items-center justify-start gap-2 group/sidebar py-2
									${isActive ? "text-primary" : "text-neutral-700"} hover:text-primary
                                    `}
											onClick={() => {}}
										>
											<Image
												src={icon}
												alt={label}
												width={1000}
												height={1000}
												className="w-5 h-5"
											/>
											<span className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium">
												{label}
											</span>
										</Link>
									</SheetClose>
								);
							})}
						<Separator className="my-2" />
						<SignedOut>
							<div className="grid gap-4">
								<Button
									asChild
									size={"md"}
									className="rounded-full"
								>
									<Link href="/sign-in">Login</Link>
								</Button>
								<Button
									asChild
									size={"md"}
									variant={"ghost"}
									className="rounded-full"
								>
									<Link href="/sign-up">Sign up</Link>
								</Button>
							</div>
						</SignedOut>
						<SignedIn>
							<div className="flex flex-col gap-4">
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
											onClick={() => {}}
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
							<div>
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
						</SignedIn>
					</nav>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
