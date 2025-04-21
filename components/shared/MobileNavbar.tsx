"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

export function MobileNavbar() {
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
			<SheetContent>
				<nav className="flex flex-col font-semibold gap-0.5 py-4 text-xs uppercase">
					{links.slice(0, 3).map(({ label, slug }, index) => {
						const isActive =
							pathname === slug ||
							pathname.startsWith(`${slug}/`);

						return (
							<SheetClose
								asChild
								key={index}
								className="p-3.5 hover:bg-primary/5 hover:text-primary transition-all ease-out"
							>
								<Link
									href={slug}
									className={`flex items-center gap-3 justify-start ${
										isActive && "text-primary"
									}`}
								>
									<p>{label}</p>
								</Link>
							</SheetClose>
						);
					})}
					<Separator className="my-8" />
					<div className="grid gap-4">
						<Button asChild size={"md"} className="rounded-full">
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
				</nav>
			</SheetContent>
		</Sheet>
	);
}
